import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  ethers,
  zeroPadValue,
  encodeBytes32String,
  isBytesLike,
  toUtf8Bytes,
  BytesLike,
} from 'ethers';
import { abi, address } from '../../abis/DataType2.json';

@Injectable()
export class EthersService {
  private provider: ethers.JsonRpcProvider;
  private signer: ethers.Wallet;
  private contract: ethers.Contract;

  constructor(private configService: ConfigService) {
    const rpcUrl = this.configService.get<string>('RPC_URL');
    const privateKey = this.configService.get<string>('PRIVATE_KEY');

    this.provider = new ethers.JsonRpcProvider(rpcUrl);
    this.signer = new ethers.Wallet(privateKey!, this.provider);
    this.contract = new ethers.Contract(address, abi, this.signer);
  }

  async zeroPadValue32(data: string) {
    return zeroPadValue(data, 32);
  }

  async encodeBytes32String(data: string) {
    return encodeBytes32String(data);
  }

  async isBytesLike(data: string) {
    return isBytesLike(data);
  }

  async toUtf8Bytes(data: string): Promise<Uint8Array> {
    return toUtf8Bytes(data);
  }

  // 위 코드는 지우지 마세요.

  async getMessage() {
    // Todo: getMessage의 값을 리턴합니다.
    return await this.contract.getMessage();
  }

  async setMessage(newMessage: string) {
    // Todo: setMessage의 값을 리턴합니다.
    // ⚠️ setter함수는 tx 확정 후 영수증을 리턴합니다.(wait)
    const tx = await this.contract.setMessage(newMessage);
    const receipt = await tx.wait();
    return receipt;
  }

  async getNumber(index: number) {
    // Todo: getNumber의 값을 리턴합니다.
    return await this.contract.getNumber(index);
  }

  async addNumber(num: number) {
    // Todo: addNumber의 값을 리턴합니다.
    // ⚠️ setter함수는 tx 확정 후 영수증을 리턴합니다.(wait)
    const tx = await this.contract.addNumber(num);
    const receipt = await tx.wait();
    return receipt;
  }

  async getNumbers() {
    // Todo: getNumbers의 값을 리턴합니다.
    return await this.contract.getNumbers();
  }

  async addName(name: string) {
    // Todo: addName의 값을 리턴합니다.
    // ⚠️ setter함수는 tx 확정 후 영수증을 리턴합니다.(wait)
    const tx = await this.contract.addName(name);
    const receipt = await tx.wait();
    return receipt;
  }

  async getNames() {
    // Todo: getNames의 값을 리턴합니다.
    return await this.contract.getNames();
  }

  async setBalance(address: string, value: number) {
    // Todo: setBalance의 값을 리턴합니다.
    // ⚠️ setter함수는 tx 확정 후 영수증을 리턴합니다.(wait)
    const tx = await this.contract.setBalance(address, value);
    const receipt = await tx.wait();
    return receipt;
  }

  async getBalance(address: string) {
    // Todo: getBalance의 값을 리턴합니다.
    return await this.contract.getBalance();
  }

  async getUser(address: string) {
    // Todo: getUser의 값을 리턴합니다.
    return await this.contract.getUser();
  }

  async setUser(address: string, name: string, age: number) {
    // Todo: setUser의 값을 리턴합니다.
    // ⚠️ setter함수는 tx 확정 후 영수증을 리턴합니다.(wait)
    const tx = await this.contract.setUser(address, name, age);
    const receipt = await tx.wait();
    return receipt;
  }

  async getDynamicData() {
    // Todo: getDynamicData의 값을 리턴합니다.
    return await this.contract.getDynamicData();
  }

  async setDynamicData(data: BytesLike) {
    // Todo: setDynamicData의 값을 리턴합니다.
    // ⚠️ setter함수는 tx 확정 후 영수증을 리턴합니다.(wait)
    const tx = await this.contract.setDynamicData(data);
    const receipt = await tx.wait();
    return receipt;
  }

  async getFixedData() {
    // Todo: getFixedData의 값을 리턴합니다.
    return await this.contract.getFixedData();
  }

  async setFixedData(data: string) {
    // Todo: setFixedData의 값을 리턴합니다.
    // ⚠️ setter함수는 tx 확정 후 영수증을 리턴합니다.(wait)
    const tx = await this.contract.setFixedData(data);
    const receipt = await tx.wait();
    return receipt;
  }

  async getDetails() {
    // Todo: getDetails의 값을 리턴합니다.
    return await this.contract.getDetails();
  }
}
