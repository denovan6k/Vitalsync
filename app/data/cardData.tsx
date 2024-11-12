type CardProps ={
    icon:string,
    title:string,
    description:string,
    link:string,
    data:string,
    graph:string,
    color: string,
}



export const CardData: CardProps[] = [
    {
      icon: '/assets/pic1.svg',
      title: 'Blood Sugar',
      data:'mg / dL',
      description: '80',
      link: 'Normal',
      graph: '/assets/pic4.svg',
      color: 'bg-[#F8DEBD]',
    },
    {
        icon: '/assets/pic2.svg',
        title: 'Heart Rate',
        data:'bpm',
        description: '98',
        link: 'Normal',
        graph: '/assets/pic5.svg',
        color: 'bg-[#FBF0F3]',
      },
      {
        icon: '/assets/pic3.svg',
        title: 'Blood Pressure',
        data:'/ 72 mmhg',
        description: '102',
        link: 'Normal',
        graph: '/assets/pic6.svg',
        color: 'bg-[#D0FBFF]',
      },
  ];
  