import { createFactory, Factory } from "../factory/factory.ts";


// TODO: this is the path that we would dynamically import
const computedPath = Deno.env.get('COMPUTED_PATH') as string;

// works like this:
// const computedPath = '../factory/computed.ts';

export async function makeContext() {
  const { computed } = await import(computedPath);

  // const factory = createFactory(computed, 'inspector');
  const factory = createFactory(computed, 'inspector');

  return {
    factory
  }
}

export interface GraphQLContext {
  factory: Factory;
}