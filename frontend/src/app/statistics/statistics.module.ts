import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { TranslateModule } from "@ngx-translate/core";
import { StatisticsRoutingModule } from "./statistics-routing.module";
import { MatDialogModule } from "@angular/material/dialog";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSidenavModule } from "@angular/material/sidenav";
import { LoginComponent } from "./smart-component/login/login.component";
import { DashboardComponent } from "./smart-component/dashboard/dashboard.component";
import { SidebarComponent } from "./smart-component/sidebar/sidebar.component";
import { AddDataMenuComponent } from "./smart-component/addDataMenu/addDataMenu.component";
import { AddPlayerComponent } from "./smart-component/add-player/add-player.component";
import { AddMetadataComponent } from "./smart-component/add-metadata/add-metadata.component";
import { MatChipsModule } from "@angular/material/chips";
import { MatGridListModule } from "@angular/material/grid-list";
import { AddServeComponent } from "./smart-component/add-serve/add-serve.component";
import { CourtDialogComponent } from "./dumb-component/court-dialog/court-dialog.component";
import { FieldModule } from "../field/field.module";
import { PlayersFormFieldComponent } from "./dumb-component/players-form-field/players-form-field.component";
import { MetadataFormFieldComponent } from "./dumb-component/metadata-form-field/metadata-form-field.component";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { AddReceiveComponent } from "./smart-component/add-receive/add-receive.component";
import { AddTossComponent } from "./smart-component/add-toss/add-toss.component";
import { AddAttackComponent } from "./smart-component/add-attack/add-attack.component";
import { AddBlockComponent } from "./smart-component/add-block/add-block.component";

@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    SidebarComponent,
    AddDataMenuComponent,
    AddPlayerComponent,
    AddMetadataComponent,
    AddServeComponent,
    AddReceiveComponent,
    AddTossComponent,
    AddAttackComponent,
    AddBlockComponent,
    CourtDialogComponent,
    PlayersFormFieldComponent,
    MetadataFormFieldComponent,
  ],
  imports: [
    StatisticsRoutingModule,
    SharedModule,
    TranslateModule,
    MatDialogModule,
    ReactiveFormsModule,
    CommonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatChipsModule,
    MatGridListModule,
    FieldModule,
    MatButtonToggleModule,
  ],
})
export class StatisticsModule {}
