import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SingleImageViewComponentComponent} from './single-image-view-component.component';

describe('SingleImageViewComponentComponent', () => {
    let component: SingleImageViewComponentComponent;
    let fixture: ComponentFixture<SingleImageViewComponentComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SingleImageViewComponentComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SingleImageViewComponentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
