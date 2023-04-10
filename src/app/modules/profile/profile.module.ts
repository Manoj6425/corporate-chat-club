import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileHeaderComponent } from './components/profile-header/profile-header.component';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { EditUserDetailsComponent } from './components/edit-user-details/edit-user-details.component';
import { ProfessionalSummaryComponent } from './components/professional-summary/professional-summary.component';
import { EditProfilePictureComponent } from './components/edit-profile-picture/edit-profile-picture.component';
import { ProfileComponent } from './pages/profile.component';


@NgModule({
  declarations: [
    ProfileHeaderComponent,
    PersonalDetailsComponent,
    ContactDetailsComponent,
    EditUserDetailsComponent,
    ProfessionalSummaryComponent,
    EditProfilePictureComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
