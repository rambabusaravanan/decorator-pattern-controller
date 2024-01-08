import { MessageController, OnMessage } from './Decorators';

@MessageController()
export class EventController {
  @OnMessage('TENANT_CREATED')
  onTenantCreated(message: any) {
    console.log('EventController.onTenantCreated:', message, this);
  }

  @OnMessage('USER_CREATED')
  onUserCreated(message: any) {
    console.log('EventController.onUserCreated:', message, this);
  }
}
