import { Generate } from "@frontside/graphgen";
import { Computed } from "../server/types.ts";

const gen: Generate = (info) => {
  return info.next();
}

export const computed: Computed = {
  generate: [gen, gen],
  compute: {
    "User.email": ({ name }) => `${name}@example.com`,
  },
}