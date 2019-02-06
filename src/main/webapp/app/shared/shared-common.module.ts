import { NgModule } from '@angular/core';

import { FirstJhSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [FirstJhSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [FirstJhSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class FirstJhSharedCommonModule {}
