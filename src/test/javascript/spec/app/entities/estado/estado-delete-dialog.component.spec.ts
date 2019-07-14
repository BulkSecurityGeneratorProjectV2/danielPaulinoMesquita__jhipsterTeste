/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { TestehipsterTestModule } from '../../../test.module';
import { EstadoDeleteDialogComponent } from 'app/entities/estado/estado-delete-dialog.component';
import { EstadoService } from 'app/entities/estado/estado.service';

describe('Component Tests', () => {
  describe('Estado Management Delete Component', () => {
    let comp: EstadoDeleteDialogComponent;
    let fixture: ComponentFixture<EstadoDeleteDialogComponent>;
    let service: EstadoService;
    let mockEventManager: any;
    let mockActiveModal: any;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [TestehipsterTestModule],
        declarations: [EstadoDeleteDialogComponent]
      })
        .overrideTemplate(EstadoDeleteDialogComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(EstadoDeleteDialogComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(EstadoService);
      mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
      mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
    });

    describe('confirmDelete', () => {
      it('Should call delete service on confirmDelete', inject(
        [],
        fakeAsync(() => {
          // GIVEN
          spyOn(service, 'delete').and.returnValue(of({}));

          // WHEN
          comp.confirmDelete(123);
          tick();

          // THEN
          expect(service.delete).toHaveBeenCalledWith(123);
          expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
          expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
        })
      ));
    });
  });
});
