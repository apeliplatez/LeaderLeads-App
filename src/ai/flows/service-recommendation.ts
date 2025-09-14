'use server';

/**
 * @fileOverview An AI-powered service recommendation tool.
 *
 * - recommendService - A function that recommends a service based on user input.
 * - ServiceRecommendationInput - The input type for the recommendService function.
 * - ServiceRecommendationOutput - The return type for the recommendService function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ServiceRecommendationInputSchema = z.object({
  businessNeeds: z
    .string()
    .describe('The business needs and goals of the user.'),
  businessCharacteristics: z
    .string()
    .describe('The characteristics of the user s business.'),
});
export type ServiceRecommendationInput = z.infer<typeof ServiceRecommendationInputSchema>;

const ServiceRecommendationOutputSchema = z.object({
  recommendedService: z.string().describe('The recommended service for the user.'),
  reason: z.string().describe('The reason for recommending the service.'),
});
export type ServiceRecommendationOutput = z.infer<typeof ServiceRecommendationOutputSchema>;

const prompt = ai.definePrompt({
  name: 'serviceRecommendationPrompt',
  input: {schema: ServiceRecommendationInputSchema},
  output: {schema: ServiceRecommendationOutputSchema},
  prompt: `You are an AI-powered service recommendation tool. Based on the user's business needs and characteristics, you will recommend the most suitable service for them and explain the reason for your recommendation.\n\nBusiness Needs: {{{businessNeeds}}}\nBusiness Characteristics: {{{businessCharacteristics}}}\n\nRecommended Service: {{recommendedService}}\nReason: {{reason}}`,
});

export const recommendService = ai.defineFlow(
  {
    name: 'recommendServiceFlow',
    inputSchema: ServiceRecommendationInputSchema,
    outputSchema: ServiceRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
