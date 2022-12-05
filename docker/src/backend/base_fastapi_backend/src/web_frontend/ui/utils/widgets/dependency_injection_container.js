export default class DIC {
    constructor() {
      this.dependencies = {}
      this.factories = {}
    }
  
    register(name, dependency) {
      this.dependencies[name] = dependency
    }
  
    factory(name, factory) {
      this.factories[name] = factory
    }
  
    get(name, args) {
      if (!this.dependencies[name]) {
        const factory = this.factories[name]
        if (factory) {
          this.dependencies[name] = this.inject(factory, args)
        } else {
          throw new Error('No module found for: ' + name)
        }
      }
      return this.dependencies[name]
    }
  
    inject(factory, args = []) {
      const fnArgs = args.map((arg) => this.get(arg))
      return new factory(...fnArgs)
    }
  }