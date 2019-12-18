import { TestBed } from '@angular/core/testing';

import { TarefaService } from './tarefa.service';

describe('TarefaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TarefaService = TestBed.get(TarefaService);
    expect(service).toBeTruthy();
  });
});
