import React from 'react'
import ParaRotation from '../../components/defilementPersonnel/ParaRotation'
import ParaLineaire from '../../components/defilementPersonnel/ParaLineaire'

export default function ParaDefilementPersonnel({tabAnim,nombre}) {
  if(nombre===0){
    return(
        <ParaRotation tabAnim={tabAnim} nombre={nombre}/>
    )
  }
  if(nombre!==0){
    return(
        <ParaLineaire tabAnim={tabAnim} nombre={nombre}/>
    )
  }
}
