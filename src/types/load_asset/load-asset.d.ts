declare module 'load-asset' {
  function load<T>(asset: T): Promise<T>
  export = load
}