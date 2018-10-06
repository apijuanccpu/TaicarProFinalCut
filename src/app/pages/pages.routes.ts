import { RouterModule, Routes } from '@angular/router';


import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

import { ProfileComponent } from './profile/profile.component';

// Guards
import { LoginGuardGuard } from '../services/service.index';
import { AdminGuard } from '../services/service.index';

import { UsuariosComponent } from './usuarios/usuarios.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { MedicosComponent } from './medicos/medicos.component';
import { MedicoComponent } from './medicos/medico.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { VerificaTokenGuard } from '../services/guards/verifica-token.guard';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { VehicleComponent } from './vehicles/vehicle.component';
import { ClientComponent } from './clients/client.component';
import { PersonesComponent } from './persones/persones.component';
import { PersonaComponent } from './persones/persona.component';
import { PressupostosComponent } from './pressupostos/pressupostos.component';
import { PressupostComponent } from './pressupostos/pressupost.component';
import { CalendariComponent } from './calendari/calendari.component';
import { ReservesComponent } from './reserves/reserves.component';
import { FacturacioComponent } from './facturacio/facturacio.component';
import { FacturaComponent } from './facturacio/factura.component';
import { Caravana2Component } from './vehicles/caravana2.component';


const pagesRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [ VerificaTokenGuard ],
        data: { titulo: 'Dashboard' }
    },
    { path: 'progress', component: ProgressComponent, data: { titulo: 'ProgressBars' } },
    { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Gráficas' } },
    { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' } },
    { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs' } },
    { path: 'account-settings', component: AccoutSettingsComponent, data: { titulo: 'Ajustes de Tema' } },
    { path: 'perfil', component: ProfileComponent, data: { titulo: 'Perfil de usuario' } },
    { path: 'busqueda/:termino', component: BusquedaComponent, data: { titulo: 'Buscador' } },
    // Mantenimientos
    {
        path: 'usuarios',
        component: UsuariosComponent,
        canActivate: [ AdminGuard ],
        data: { titulo: 'Mantenimiento de Usuarios' }
    },
    { path: 'hospitales', component: HospitalesComponent, data: { titulo: 'Mantenimiento de Hospitales' } },
    { path: 'vehicles', component: VehiclesComponent, data: { titulo: 'Mantenimiento de Vehicles' } },
    { path: 'vehicle/:id', component: VehicleComponent, data: { titulo: 'Actualizar Vehicle' } },
    { path: 'persones', component: PersonesComponent, data: { titulo: 'Mantenimiento de clients' } },
    { path: 'persona/:dni?/:dnipers?', component: PersonaComponent, data: { titulo: 'Actualització de clients' } },
    { path: 'pressupostos', component: PressupostosComponent, data: { titulo: 'Mantenimiento de Pressupostos' } },
    { path: 'pressupost/:id?/:idclient?', component: PressupostComponent, data: { titulo: 'Gestió de pressupost' } },
    { path: 'reserves', component: ReservesComponent, data: { titulo: 'Mantenimiento de Reserves' } },
    { path: 'medicos', component: MedicosComponent, data: { titulo: 'Mantenimiento de Médicos' } },
    { path: 'medico/:id', component: MedicoComponent, data: { titulo: 'Actualizar Médico' } },
    { path: 'calendari', component: CalendariComponent, data: { titulo: 'Calendari' } },
    { path: 'facturacio', component: FacturacioComponent, data: { titulo: 'Facturació' } },
    { path: 'factura', component: FacturaComponent, data: { titulo: 'Factura' } },
    { path: 'client', component: ClientComponent, data: { titulo: 'Client' } },
    { path: 'caravana2/:id', component: Caravana2Component, data: { titulo: 'Caravana2' } },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
