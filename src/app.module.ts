import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config/dist';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      inject: [ConfigService],
      useFactory: (ConfigService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST','localhost'),
        port: 3306,
        username: 'root',
        password: '1234',
        database: 'test',
        entities: [],
        synchronize: true,
      })
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
