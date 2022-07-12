import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import("./../collaboration/collaboration.module").then(m => m.CollaborationModule)
	},	
	{
		path: 'collaboration',
		loadChildren: () => import("./../collaboration/collaboration.module").then(m => m.CollaborationModule)
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
