import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Converter } from './converter/converter';
import { About } from './about/about';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
    { path: "home", component: Home },
    { path: "converter", component: Converter },
    { path: "about", component: About },
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "**", component: NotFound },
    { path: "404", component: NotFound }
];
