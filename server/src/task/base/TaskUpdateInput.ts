/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { UserUpdateManyWithoutTasksInput } from "./UserUpdateManyWithoutTasksInput";
import { Type } from "class-transformer";
@InputType()
class TaskUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  completed?: string;

  @ApiProperty({
    required: false,
    type: () => UserUpdateManyWithoutTasksInput,
  })
  @ValidateNested()
  @Type(() => UserUpdateManyWithoutTasksInput)
  @IsOptional()
  @Field(() => UserUpdateManyWithoutTasksInput, {
    nullable: true,
  })
  user?: UserUpdateManyWithoutTasksInput;
}
export { TaskUpdateInput };
