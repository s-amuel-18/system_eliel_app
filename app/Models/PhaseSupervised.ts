import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class PhaseSupervised extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public phaseId: number

  @column()
  public createdBy: string

  @column()
  public description: string

  @column()
  public numberCi: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
