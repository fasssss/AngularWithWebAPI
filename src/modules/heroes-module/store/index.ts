import { HeroesStoreModule } from "./heroes-store.module";
import * as HeroesStoreSelector from "./selector";
import {State as HeroesStoreState} from "./state";

export * from "./delete-feature";
export * from "./post-feature";
export * from "./fetch-feature";
export * from "./update-feature";
export { HeroesStoreModule, HeroesStoreState, HeroesStoreSelector};
