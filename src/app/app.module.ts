import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { CorpoComponent } from './components/corpo/corpo.component';
import { ResumoComponent } from './components/resumo/resumo.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { DiscussoesComponent } from './components/discussoes/discussoes.component';
import { CreateTopicComponent } from './components/create-topic/create-topic.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    CabecalhoComponent,
    CorpoComponent,
    ResumoComponent,
    RodapeComponent,
    DiscussoesComponent,
    CreateTopicComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
