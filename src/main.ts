import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import 'zone.js'; // pour Stackblitz uniquement

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
