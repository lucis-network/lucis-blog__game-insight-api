import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
  isURL,
  isPhoneNumber,
} from 'class-validator';

@ValidatorConstraint({ name: 'IsUrl', async: false })
export class IsUrlInput implements ValidatorConstraintInterface {
  validate(value: { set?: string }, args: ValidationArguments) {
    if (!value || value.set === '' || !value.set) {
      return true;
    }
    return isURL(value.set);
  }

  defaultMessage(args: ValidationArguments) {
    return args.property + ' not valid url';
  }
}

@ValidatorConstraint({ name: 'IsPhoneInput', async: false })
export class IsPhoneInput implements ValidatorConstraintInterface {
  validate(value: { set?: string }, args: ValidationArguments) {
    console.log('value:', value);
    if (!value || value.set === '' || !value.set) {
      return true;
    }
    return isPhoneNumber(value.set);
  }

  defaultMessage(args: ValidationArguments) {
    return args.property + ' not valid phone';
  }
}
