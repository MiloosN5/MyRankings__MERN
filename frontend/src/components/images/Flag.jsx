// import.js
import CountriesFlag from '../../import'

const Flag = ({ country }) => {

  const flags = {
    Argentina: CountriesFlag.Argentina,
    Australia: CountriesFlag.Australia,
    Belarus: CountriesFlag.Belarus,
    Belgium: CountriesFlag.Belgium,
    Brazil: CountriesFlag.Brazil,
    Canada: CountriesFlag.Canada,
    China: CountriesFlag.China,
    CzechRepublic: CountriesFlag.CzechRepublic,
    Denmark: CountriesFlag.Denmark,
    France: CountriesFlag.France,
    Germany: CountriesFlag.Germany,
    Greece: CountriesFlag.Greece,
    Italy: CountriesFlag.Italy,
    Kazakhstan: CountriesFlag.Kazakhstan,
    Latvia: CountriesFlag.Latvia,
    Poland: CountriesFlag.Poland,
    Romania: CountriesFlag.Romania,
    Russia: CountriesFlag.Russia,
    Serbia: CountriesFlag.Serbia,
    Spain: CountriesFlag.Spain,
    Switzerland: CountriesFlag.Switzerland,
    Ukraine: CountriesFlag.Ukraine,
    UnitedKingdom: CountriesFlag.UnitedKingdom,
    UnitedStates: CountriesFlag.UnitedStates,
    unknown: CountriesFlag.unknown
  }

  return (
    <img
      className='flag'
      src={`${flags[country] ? flags[country] : flags['unknown']}`}
      alt={`Flag of ${flags[country] ? country : 'unknown'}`}
    />
  )

}

export default Flag