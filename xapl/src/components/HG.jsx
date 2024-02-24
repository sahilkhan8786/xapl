const data = [
    {
        id: 1,
        name: 'Ankit',
        weightLift: '150'

    },
    {
        id: 2,
        name: 'Vikky',
        weightLift: '450'

    },
    {
        id: 3,
        name: 'Happy',
        weightLift: '90'

    },
    {
        id: 4,
        name: 'Virat',
        weightLift: '80'

    },
]

export default function HG() {
    return (
        <div className="bg-white p-12  flex  flex-col gap-5 rounded-lg ">
            <h1 className="text-dashboardMain font-bold text-xl">
                Highest Weight
            </h1>
            <div className="">
                <div>

                    <div className="flex gap-12 text-dashboardSecondry">
                        <span>#</span>
                        <span>Name</span>
                        <span className="flex-1 pl-8" >Weight Lift(in kg)</span>

                    </div>
                    <hr className="mt-4" />
                </div>
                {data.map(el => (
                    <div key={el.id} className=" pt-5">

                        <div className="flex gap-12 text-dashboardSecondry ">
                            <span>0{el.id}</span>
                            <span>{el.name}</span>
                            <span className="flex-1 pl-8" >{el.weightLift}</span>

                        </div>
                        <hr className="mt-4" />
                    </div>))}
            </div>
        </div>
    )
}
