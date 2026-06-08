import { IBookingPaymentResponseDto } from '@repo/highland-hosts-api-client';

export class BookingPaymentResponseDto implements IBookingPaymentResponseDto {
  success: boolean;
  message: string;
}
