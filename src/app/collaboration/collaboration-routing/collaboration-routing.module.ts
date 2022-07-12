import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
//import { VideoJitsiStartComponent } from '../collaboration-video-start/video-jitsi-start.component';
//import { VideoJitsiEnterComponent } from '../collaboration-video-enter/video-jitsi-enter.component';
import { ChatComponent } from '../collaboration-chat/chat.component';
import { TabsComponent } from '../tabs/tabs.component';

const routes: Routes = [
    { path: '', component: TabsComponent },
    { path: 'chat', component: TabsComponent },    
//    { path: 'collaboration-video-start', component: VideoJitsiStartComponent },
//    { path: 'collaboration-video-enter', component: VideoJitsiEnterComponent },
//    { path: 'collaboration-video-enter/video/:id', component: VideoJitsiEnterComponent },    
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class CollaborationRoutingModule { }
