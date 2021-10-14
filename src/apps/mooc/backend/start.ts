import { MoocBackendApp } from './MoocBackendApp';

try {
  new MoocBackendApp().start();
} catch (e) {
  console.log(e);
  process.exit(1);
}

process.on('uncaughtException', err => {
  console.log('uncaughtException', err);
  console.log('commit test');
  process.exit(1);
});
