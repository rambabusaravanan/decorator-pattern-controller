import 'reflect-metadata';
import { handlerInstance } from './EventHandler';
import './EventController';

function main() {
  handlerInstance.handle('TENANT_CREATED', { tenantId: 'xxx' });
  handlerInstance.handle('TENANT_CREATED', { tenantId: 'yyy' });
  handlerInstance.handle('USER_CREATED', { tenantId: 'uuu' });
}
main();
