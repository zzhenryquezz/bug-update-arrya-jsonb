import { Entity, model, property } from '@loopback/repository';

@model({ settings: {} })
export class Test extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'array',
    itemType: 'object',
    required: true,
    postgresql: {
      dataType: 'jsonb'
    }
  })
  test_array: object[];


  constructor(data?: Partial<Test>) {
    super(data);
  }
}

export interface TestRelations {
  // describe navigational properties here
}

export type TestWithRelations = Test & TestRelations;
