import Section from '#models/section'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Section.createMany([
      {
        sectionName: 'Office of the Regional Director',
        sectionCode: 'ORD',
        divisionId: 4,
      },
      {
        sectionName: 'Office of the Assistant Regional Director',
        sectionCode: 'OARD',
        divisionId: 4,
      },
      {
        sectionName: 'Information and Communications Technology Unit',
        sectionCode: 'ICTU',
        divisionId: 4,
      },
      {
        sectionName: 'Research, Epidemiology, Surveillance, and Disaster Risk Unit',
        sectionCode: 'RESDR',
        divisionId: 4,
      },
      {
        sectionName: 'Health Facility Development Unit',
        sectionCode: 'HFDU',
        divisionId: 4,
      },
      {
        sectionName: 'Office of the Chief Administrative Officer',
        sectionCode: 'CAO',
        divisionId: 1,
      },
      {
        sectionName: 'Procurement Section',
        sectionCode: 'PROC',
        divisionId: 1,
      },
      {
        sectionName: 'Supply Section',
        sectionCode: 'SPPLY',
        divisionId: 1,
      },
      {
        sectionName: 'Human Resource Development Unit',
        sectionCode: 'HRDU',
        divisionId: 1,
      },
      {
        sectionName: 'Personnel Section',
        sectionCode: 'PRSNL',
        divisionId: 1,
      },
      {
        sectionName: 'Health Planning Unit',
        sectionCode: 'HPU',
        divisionId: 1,
      },
      {
        sectionName: 'Legal Unit',
        sectionCode: 'LGL',
        divisionId: 1,
      },
      {
        sectionName: 'Public Assistance and Complaints Desk',
        sectionCode: 'PACD',
        divisionId: 1,
      },
      {
        sectionName: 'Records Section',
        sectionCode: 'RCRDS',
        divisionId: 1,
      },
      {
        sectionName: 'Accounting Section',
        sectionCode: 'ACCTG',
        divisionId: 1,
      },
      {
        sectionName: 'Budget Section',
        sectionCode: 'BDGT',
        divisionId: 1,
      },
      {
        sectionName: 'Cashier Section',
        sectionCode: 'CSHR',
        divisionId: 1,
      },
      {
        sectionName: 'Transport/General Services Section',
        sectionCode: 'TGSS',
        divisionId: 1,
      },
      {
        sectionName: 'Regulations, Licensing, and Enforcement Division',
        sectionCode: 'RLED',
        divisionId: 3,
      },
      {
        sectionName: 'Office of the LHSD Chief',
        sectionCode: 'OLHSD',
        divisionId: 2,
      },
      {
        sectionName: 'Infectious Diseases Cluster',
        sectionCode: 'IDC',
        divisionId: 2,
      },
      {
        sectionName: 'Non-communicable Diseases Cluster',
        sectionCode: 'NCDC',
        divisionId: 2,
      },
      {
        sectionName: 'Environmental and Occupational Health Cluster',
        sectionCode: 'EOH',
        divisionId: 2,
      },
      {
        sectionName: 'Family Health Cluster',
        sectionCode: 'FHC',
        divisionId: 2,
      },
      {
        sectionName: 'Local Health Systems Development Cluster',
        sectionCode: 'LHSDC',
        divisionId: 2,
      },
      {
        sectionName: 'Bukidnon Provincial DOH Office',
        sectionCode: 'PBUK',
        divisionId: 5,
      },
      {
        sectionName: 'Camiguin Provincial DOH Office',
        sectionCode: 'PCAM',
        divisionId: 5,
      },
      {
        sectionName: 'Lanao del Norte Provincial DOH Office',
        sectionCode: 'PLDN',
        divisionId: 5,
      },
      {
        sectionName: 'Misamis Oriental Provincial DOH Office',
        sectionCode: 'PMOR',
        divisionId: 5,
      },
      {
        sectionName: 'Misamis Occidental Provincial DOH Office',
        sectionCode: 'PMOC',
        divisionId: 5,
      },
      {
        sectionName: 'Cagayan de Oro City DOH Office',
        sectionCode: 'CCDO',
        divisionId: 5,
      },
      {
        sectionName: 'Iligan City DOH Office',
        sectionCode: 'CILG',
        divisionId: 5,
      },
    ])
  }
}
