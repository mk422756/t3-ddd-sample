import { z } from "zod";
import GetTweetsUsecase from "../../usecase/get-tweets-usecase";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const tweetRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  getAll: publicProcedure.query(() => {
    const usecase = new GetTweetsUsecase();
    const ret = usecase.handle();
    console.log(2, ret);
    return ret;
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
