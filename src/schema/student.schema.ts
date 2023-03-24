import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema()
export class Student {
  @Prop()
  name: string;
  @Prop()
  class: number;
  @Prop()
  gender: string;
  @Prop()
  marks: number;
}
export const StudentSchema = SchemaFactory.createForClass(Student);
