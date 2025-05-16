import { Controller, Get, Patch, Post, Body, Param } from '@nestjs/common';
import { Datatype2Service } from '../service/datatype2.service';
import { SetBalanceDto } from '../dto/set-balance.dto';
import { SetUserDto } from '../dto/set-user.dto';

@Controller('datatype2')
export class Datatype2Controller {
  constructor(private readonly datatype2Service: Datatype2Service) { }

  @Get('message')
  async getMessage() {
    return await this.datatype2Service.message();
  }

  @Patch('message')
  async setPositive(@Body() option: { message: string }) {
    return await this.datatype2Service.message(option.message);
  }

  @Get('number/:index')
  async getNumber(@Param('index') index: number) {
    return await this.datatype2Service.number(index);
  }

  @Post('number')
  async addNumber(@Body() option: { number: number }) {
    return await this.datatype2Service.number(undefined, option.number);
  }

  @Get('numbers')
  async getNumbers() {
    return await this.datatype2Service.numbers();
  }

  @Get('names')
  async getNames() {
    return await this.datatype2Service.names();
  }

  @Post('name')
  async addName(@Body() option: { name: string }) {
    return await this.datatype2Service.addName(option.name);
  }

  @Get('balance/:address')
  async getBalance(@Param('address') address: string) {
    return await this.datatype2Service.balance(address);
  }

  @Patch('balance')
  async setBalance(@Body() setBalanceDto: SetBalanceDto) {
    return await this.datatype2Service.balance(
      setBalanceDto.address,
      setBalanceDto.value
    );
  }

  @Get('user/:address')
  async getUser(@Param('address') address: string) {
    return await this.datatype2Service.user(address);
  }

  @Post('user')
  async setUser(@Body() setUserDto: SetUserDto) {
    return await this.datatype2Service.user(
      setUserDto.address,
      setUserDto.name,
      setUserDto.age
    );
  }

  @Get('fixed')
  async getFixed() {
    return await this.datatype2Service.fixedData();
  }

  @Post('fixed')
  async setFixed(@Body() option: { data: string }) {
    return await this.datatype2Service.fixedData(option.data);
  }

  @Get('dynamic')
  async getDynamic() {
    return await this.datatype2Service.dynamicData();
  }

  @Post('dynamic')
  async setDynamic(@Body() option: { data: string }) {
    return await this.datatype2Service.dynamicData(option.data);
  }

  @Get('details')
  async getDetails() {
    return await this.datatype2Service.getDetails();
  }
}
