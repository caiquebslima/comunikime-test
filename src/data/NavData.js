import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ChatIcon from '@material-ui/icons/Chat';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import TimelapseIcon from '@material-ui/icons/Timelapse';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import PersonIcon from '@material-ui/icons/Person';
import HistoryIcon from '@material-ui/icons/History';
import SettingsIcon from '@material-ui/icons/Settings';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import LayersIcon from '@material-ui/icons/Layers';
import EditIcon from '@material-ui/icons/Edit';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import FolderSpecialIcon from '@material-ui/icons/FolderSpecial';

export const NavData = [
  {
    title: 'Dashboards',
    icon: <DashboardIcon />,
    iconClosed: <ArrowDropDownIcon />,
    iconOpened: <ArrowDropUpIcon />,
    subNav: [
      {
        title: 'Chat',
        icon: <ChatIcon />,
      },
      {
        title: 'Gráfico por Mídia',
        icon: <ShowChartIcon />,
      },
      {
        title: 'Tempo Real',
        icon: <TimelapseIcon />,
      },
    ],
  },
  {
    title: 'WhatsApp RPA',
    icon: <WhatsAppIcon />,
  },
  {
    title: 'Jornada do Cliente',
    icon: <PersonIcon />,
  },
  {
    title: 'Histórico Geral',
    icon: <HistoryIcon />,
  },
  {
    title: 'Configurações',
    icon: <SettingsIcon />,
    iconClosed: <ArrowDropDownIcon />,
    iconOpened: <ArrowDropUpIcon />,
    subNav: [
      {
        title: 'Grupos de Disposições',
        icon: <LayersIcon />,
      },
      {
        title: 'Editar Mídias',
        icon: <EditIcon />,
      },
      {
        title: 'Controle Bad Words',
        icon: <MoodBadIcon />,
      },
      {
        title: 'Operação OMN!A',
        icon: <FolderSpecialIcon />,
      },
    ],
  },
];
