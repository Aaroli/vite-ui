declare module "*.vue" {
  import { ComponentOptions } from "vue";
  const componentOptions: ComponentOptions;
  export default componentOptions;
  export function DefineOptions<DefineComponent>(): Readonly<DefineComponent>;
}

interface ArrayConstructor {
  from(arrayLike: any, mapFn?, thisArg?): Array<any>;
}
