import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { PokerComponent } from './poker/poker.component';

const routes: Routes = [
  { path: 'poker', component: PokerComponent },
  {
    path: '',
    component: RegistrationComponent,
  },
  {
    path: '**',
    component: RegistrationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
