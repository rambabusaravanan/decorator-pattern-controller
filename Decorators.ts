import { handlerInstance } from './EventHandler';

export const MessageController = (): ClassDecorator => {
  console.log('D:MessageController Initiate:');
  return (target: any) => {
    console.log('D:MessageController Register:');

    if (!Reflect.hasMetadata('handlers', target)) {
      Reflect.defineMetadata('handlers', [], target);
    }
    const handlers: Array<any> = Reflect.getMetadata('handlers', target);
    const instance = new target(); // replace with DI if needed
    console.log('Instance created', instance);
    handlers.forEach((route) => {
      console.log('Handler registered from', target.name, route);
      handlerInstance.mapping[route.messageName] = instance[route.propertyKey].bind(instance);
    });
  };
};

export function OnMessage(messageName: string) {
  console.log('D:OnMessage Initiate:', messageName);
  return (target: any, propertyKey: string): void => {
    console.log('D:OnMessage Register:', messageName, propertyKey);
    if (!Reflect.hasMetadata('handlers', target.constructor)) {
      Reflect.defineMetadata('handlers', [], target.constructor);
    }
    const handlers = Reflect.getMetadata('handlers', target.constructor) as Array<any>;
    handlers.push({
      messageName,
      propertyKey,
    });
    Reflect.defineMetadata('handlers', handlers, target.constructor);
  };
}
