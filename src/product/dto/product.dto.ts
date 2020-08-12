import { prop } from '@typegoose/typegoose';
import { IsUrl, IsDecimal, Validate, IsEnum } from 'class-validator';
import { ISO4217, IsGTIN, ValidateHTMLColorName } from './CustomValidators';

export class Product {
  @prop({ required: true })
  title: string;

  @prop({ required: true })
  description: string;

  @prop({ required: true })
  @IsUrl()
  link: string;

  @prop({ required: true })
  @IsDecimal(
    { decimal_digits: '2', locale: 'en-US' },
    {
      message:
        'Wrong prica format. It should be like 0.00. Precision side should be 2 digits',
    },
  )
  price: string;

  @prop({ required: true })
  @Validate(ISO4217, {
    message:
      'Wrong currency type. It must be valid for ISO4217 standards. e.g USD, EUR, TRY',
  })
  currency: string;

  @prop({ required: true })
  quantity: number;

  @prop({ required: true })
  brand: string;

  @prop({ required: true })
  @Validate(ValidateHTMLColorName, {
    message: 'Color name not found. Use similar like red, green, blue etc.',
  })
  color: string;

  @prop({ required: true })
  @IsEnum(['male', 'female', 'unisex'], {
    message: 'Gender must be one of them: male, female, unisex',
  })
  gender: string;

  @prop()
  @Validate(IsGTIN, {
    message:
      'Wrong GTIN input. It should be 14-digit number like 00012345678905',
  })
  gtin?: string;

  @prop()
  mpn?: string;

  @prop({ required: true })
  @IsEnum(['new', 'used'], {
    message: 'Message must be one of them: new, used',
  })
  condition: string;
}
