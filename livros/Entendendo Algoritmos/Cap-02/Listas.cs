public static void Main(string args[]){

	var array = new int[5];
	array[0] = 1;
	array[1] = 2;
	array[2] = 3;
	array[3] = 4;
	array[4] = 5;

	var lista = new List<int>();
	lista.Add(1);
	lista.Add(2);
	lista.Add(3);
	lista.Add(4);
	lista.Add(5);

	Console.WriteLine("Ler array na posição 3" + array[3]);
	Console.WriteLine("Ler lista na posição 3" + lista[3]);
}