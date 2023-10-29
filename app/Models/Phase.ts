import { DateTime } from 'luxon'
import { manyToMany, BaseModel, belongsTo, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Project from './Project'
import Area from './Area'
import Involved from './Involved'
import PhaseSupervised from './PhaseSupervised'

export default class Phase extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public projectId: number

  @column()
  public areaId: number

  @column()
  public name: string

  @column()
  public description: string

  @column()
  public budget: number

  @column.dateTime()
  public startDate: DateTime

  @column.dateTime()
  public finishDate: DateTime

  @column()
  public status: number

  @column()
  public isSupervised: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasOne(() => PhaseSupervised, { foreignKey: "phase_id", localKey: "id" })
  public superviced: HasOne<typeof PhaseSupervised>

  @belongsTo(() => Project)
  public project: BelongsTo<typeof Project>

  @belongsTo(() => Area)
  public area: BelongsTo<typeof Area>

  @manyToMany(() => Involved)
  public involved: ManyToMany<typeof Involved>

  static get statusPhases() {
    return [
      { id: 1, value: "Por iniciar" },
      { id: 2, value: "En proceso" },
      { id: 3, value: "Culminado" },
      { id: 4, value: "Cancelado" },
    ]
  }


  statusValue() {
    return this.status ? Phase.statusPhases.find(s => s.id == this.status) : null
  }
}
