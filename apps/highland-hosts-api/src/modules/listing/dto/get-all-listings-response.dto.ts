import type { IGetAllListingsResponseDto } from '@repo/highland-hosts-api-client';
import { GetHostListingsResponseDto } from './get-host-listings-response.dto';

export class GetAllListingsResponseDto
  extends GetHostListingsResponseDto
  implements IGetAllListingsResponseDto {}
