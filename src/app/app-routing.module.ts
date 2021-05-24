import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthenticationComponent} from './authentication/authentication.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MenuComponent} from './menu/menu.component';
import {UsersComponent} from './users/users.component';
import {LibraryComponent} from './library/library.component';
import {ProjectComponent} from './project/project.component';
import {CreateCompoundComponent} from './create-compound/create-compound.component';
import {ErrorComponent} from './error/error.component';
import {ResetPassByEmailComponent} from './register/reset-password/reset-pass-by-email/reset-pass-by-email.component';
import {ActionExecutionDashboardComponent} from './dashboard/action-execution-dashboard/action-execution-dashboard.component';
import {NotificationsComponent} from './notifications/notifications.component';
import {SettingsComponent} from './users/settings/settings.component';
import {ResetPasswordComponent} from './register/reset-password/reset-password.component';
import {TestCaseListComponent} from './test-case/test-case-list/test-case-list.component';
import {ListOfTestCaseExecutionComponent} from './list-of-test-case-execution/list-of-test-case-execution.component';
import {ListOfTestCasesComponent} from './list-of-test-cases/list-of-test-cases.component';
import {CreateActionComponent} from './create-action/create-action.component';
import {TestCaseEditComponent} from './test-case/test-case-edit/test-case-edit.component';
import {ListOfDataSetComponent} from './list-of-data-set/list-of-data-set.component';
import {TestCaseViewComponent} from './test-case/test-case-view/test-case-view.component';
import {CreateDataSetComponent} from './create-data-set/create-data-set.component';
import {ProjectViewComponent} from './project/project-view/project-view.component';
import {ProjectEditComponent} from './project/project-edit/project-edit.component';
import {TestCaseComponent} from './test-case/test-case.component';
import {TestScenarioComponent} from './test-scenario/test-scenario.component';
import {TestScenarioCreateComponent} from './test-scenario/test-scenario-create/test-scenario-create.component';
import {TestScenarioEditComponent} from './test-scenario/test-scenario-edit/test-scenario-edit.component';
import {TestScenarioListComponent} from './test-scenario/test-scenario-list/test-scenario-list.component';
import {EditViewActionComponent} from './library/edit-view-action/edit-view-action.component';
import {EditDataSetComponent} from './edit-data-set/edit-data-set.component';
import {CompoundComponent} from './compound/compound.component';
import {ActionExecutionComponent} from './action-execution/action-execution.component';


const routes: Routes = [
  { path: 'login', component: AuthenticationComponent},
  { path: '', component: AuthenticationComponent},
  { path: 'projects/:project_id', component: ProjectViewComponent},
  { path: 'create-action', component: CreateActionComponent },
  { path: 'menu', component: MenuComponent},
  { path: 'dataset/edit/:id', component: EditDataSetComponent},
  { path: 'compounds/edit/:id', component: CompoundComponent},
  { path: 'users', component: UsersComponent},
  { path: 'action/view-edit/:id', component: EditViewActionComponent},
  { path: 'users', component: UsersComponent},
  { path: 'projects', component: ProjectComponent},
  { path: 'library', component: LibraryComponent/*, canActivate: [RoleGuard]*/},
  { path: 'compounds/create', component: CreateCompoundComponent},
  { path: 'dashboard', component: DashboardComponent/*,  canActivate: [RoleGuard]*/},
  { path: 'projects/:project_id/testcase', component: TestCaseComponent},
  { path: 'projects/:project_id/edit', component: ProjectEditComponent},
  { path: 'projects', component: ProjectComponent},
  { path: 'projects/:project_id/testcase/:test_case_id/edit', component: TestCaseEditComponent},
  { path: 'projects/:project_id/testcase/:test_case_id', component: TestCaseViewComponent},
  { path: 'create-data-set', component: CreateDataSetComponent},
  { path: 'list-of-data-set', component: ListOfDataSetComponent },
  { path: 'list-of-test-cases', component: ListOfTestCasesComponent },
  { path: 'list-of-test-cases-pagination', component: TestCaseListComponent},
  { path: 'list-of-test-case-execution', component: ListOfTestCaseExecutionComponent},
  { path: 'list-of-test-cases-pagination', component: TestCaseListComponent},
  { path: 'list/actions-execution/:test_case_execution_id', component: ActionExecutionComponent},
  { path: 'reset-password/:token', component: ResetPasswordComponent},
  { path: 'settings', component: SettingsComponent},
  { path: 'action-execution-dashboard', component: ActionExecutionDashboardComponent},
  { path: 'notification', component: NotificationsComponent},
  { path: 'action-execution-dashboard', component: ActionExecutionDashboardComponent},
  { path: `reset-by-email`, component: ResetPassByEmailComponent},
  { path: 'test-scenario', component: TestScenarioComponent, /*canActivateChild: [RoleGuard],*/ children: [
      { path: '', pathMatch: 'full', redirectTo: 'list'},
      { path: 'create', component: TestScenarioCreateComponent},
      { path: 'edit/:id', component: TestScenarioEditComponent},
      { path: 'list', component : TestScenarioListComponent},
    ]
  },
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: '/error' },
/*  { path: 'list/actions-execution/:test_case_execution_id', component: ActionExecutionComponent},*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
