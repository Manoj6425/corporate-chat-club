import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { MyClubsChatComponent } from './components/my-clubs-chat/my-clubs-chat.component';
import { MyClubsComponent } from './pages/my-clubs/my-clubs.component';
import { MyHomeComponent } from './pages/my-home.component';
import { MyThreadsComponent } from './pages/my-threads/my-threads.component';
import { ClubGroupInfoComponent } from './components/club-group-info/club-group-info.component';
import { MyThreadsChatComponent } from './components/my-threads-chat/my-threads-chat.component';

const routes: Routes = [
  {path:'',component:MyHomeComponent,children:[
    {path:'clubs-list',component:MyClubsComponent,children:[
      {path:':id/chat',component:MyClubsChatComponent},
      {path:':id/group-info',component:ClubGroupInfoComponent},
    ]},
    {path:'threads-list',component:MyThreadsComponent,children:[
      {path:':userId/user-chat',component:MyThreadsChatComponent},
    ]},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyHomeRoutingModule { }

