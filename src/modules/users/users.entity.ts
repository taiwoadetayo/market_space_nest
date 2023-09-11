/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  email: string;

  @Column({ length: 15 })
  phone: string;

  @Column()
  email_verified_at: Date;

  @Column({ length: 255 })
  password: string;

  @Column({ length: 255 })
  remember_token: string;

  @Column({ default: () => 'CURRENT_TIMESTAMP', type: 'timestamp' })
  created_at: Date;

  @Column()
  updated_at: Date;

  @Column({ length: 40 })
  first_name: string;

  @Column({ length: 40 })
  last_name: string;

  @Column({ length: 255 })
  photo: string;

  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  wallet_balance: number;

  @Column('boolean', { default: false })
  is_verified: boolean;

  @Column()
  is_verified_date: Date;

  @Column({ length: 255 })
  business_name: string;

  @Column()
  last_seen: Date;

  @Column({ default: false })
  is_active: boolean;
}
