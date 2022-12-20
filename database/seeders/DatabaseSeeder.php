<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Ingredients;
use App\Models\BranchIngredients;
use App\Models\Branch;
use App\Models\Production;
use Illuminate\Support\Facades\Hash;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

    		for ($i=0; $i < 5; $i++) { 
    			$branch = new Branch;
				$branch->path ='/adminstrator/branch/loading?branch-'.$i;
				$branch->title = 'Branch '.$i;
				$branch->icon = 'fa fa-store';
				$branch->save();
    		}

			// $production = new Production;
			// $production->price ='30';
			// $production->bread_name = 'ATIS-ATIS(B)';
			// $production->save();
			// $production = new Production;
			// $production->price ='5';
			// $production->bread_name = 'ATIS-ATIS(S)';
			// $production->save();
			// $production = new Production;
			// $production->price ='5';
			// $production->bread_name = 'BANANA CAKE';
			// $production->save();
			// $production = new Production;
			// $production->price ='5';
			// $production->bread_name = 'BELGIUM';
			// $production->save();
			// $production = new Production;
			// $production->price ='5';
			// $production->bread_name = 'BINANGKAL';
			// $production->save();
			// $production = new Production;
			// $production->price ='50';
			// $production->bread_name = 'BIRTHDAY CAKE';
			// $production->save();
			// $production = new Production;
			// $production->price ='5';
			// $production->bread_name = 'BOHOL';
			// $production->save();
			// $production = new Production;
			// $production->price ='5';
			// $production->bread_name = 'BUKO PIE';
			// $production->save();
			// $production = new Production;
			// $production->price ='4';
			// $production->bread_name = 'BUNS';
			// $production->save();
			// $production = new Production;
			// $production->price ='5';
			// $production->bread_name = 'CHEESE BREAD';
			// $production->save();
			// $production = new Production;
			// $production->price ='5';
			// $production->bread_name = 'CHEESE DSAL';
			// $production->save();
			// $production = new Production;
			// $production->price ='';
			// $production->bread_name = 'CHIFFON CAKE';
			// $production->save();
			// $production = new Production;
			// $production->price ='5';
			// $production->bread_name = 'CHOCO CUP CAKE';
			// $production->save();
			// $production = new Production;
			// $production->price ='5';
			// $production->bread_name = 'CHOCO FLOWER';
			// $production->save();
			// $production = new Production;
			// $production->price ='5';
			// $production->bread_name = 'CHOCO GERMAN';
			// $production->save();
			// $production = new Production;
			// $production->price ='5';
			// $production->bread_name = 'CHOCO ROLL';
			// $production->save();
			// $production = new Production;
			// $production->price ='5';
			// $production->bread_name = 'CHOCO SQUASH';
			// $production->save();
			// $production = new Production;
			// $production->price ='5';
			// $production->bread_name = 'CHOCOLATE CAKE';
			// $production->save();
			// $production = new Production;
			// $production->price ='5';
			// $production->bread_name = 'CINNAMON';
			// $production->save();
			// $production = new Production;
			// $production->price ='5';
			// $production->bread_name = 'COCO BREAD/PANSO';
			// $production->save();
			// $production = new Production;
			// $production->price ='10';
			// $production->bread_name = 'CORNSTARCH CAKE';
			// $production->save();
			// $production = new Production;
			// $production->price ='5';
			// $production->bread_name = 'CRINKLES - CHOCO';
			// $production->save();
			// $production = new Production;
			// $production->price ='5';
			// $production->bread_name = 'CRINKLES - UBE';
			// $production->save();
			// $production = new Production;
			// $production->price ='5';
			// $production->bread_name = 'CUP CAKE';
			// $production->save();
			// $production = new Production;
			// $production->price ='25';
			// $production->bread_name = 'DELETCHE';
			// $production->save();
			// $production = new Production;
			// $production->price ='5';
			// $production->bread_name = 'DOUGHNUT';
			// $production->save();
			// $production = new Production;
			// $production->price ='5';
			// $production->bread_name = 'EGG BREAD';
			// $production->save();
			// $production = new Production;
			// $production->price ='5';
			// $production->bread_name = 'ELORDE';
			// $production->save();
			// $production = new Production;
			// $production->price ='30';
			// $production->bread_name = 'ENSAIMADA PLAIN (b)';
			// $production->save();
			// $production = new Production;
			// $production->price ='5';
			// $production->bread_name = 'ENSAIMADA PLAIN()';
			// $production->save();
			// $production = new Production;
			// $production->price ='30';
			// $production->bread_name = 'ENSAIMADA with chz(b)';
			// $production->save();
			// $production = new Production;
			// $production->price ='30';
			// $production->bread_name = 'ENSAIMONGGO (b)';
			// $production->save();
			// $production = new Production;
			// $production->price ='5';
			// $production->bread_name = 'ENSAIMONGGO (5)';
			// $production->save();
			// $production = new Production;
			// $production->price ='5';
			// $production->bread_name = 'FRANCIS(b)';
			// $production->save();
			// $production = new Production;
			// $production->price ='2';
			// $production->bread_name = 'FRANCIS(s)';
			// $production->save();
			// $production = new Production;
			// $production->price ='30';
			// $production->bread_name = 'GERMAN LOAF';
			// $production->save();
			// $production = new Production;
			// $production->price ='5';
			// $production->bread_name = 'HALF MOON';
			// $production->save();
			// $production = new Production;
			// $production->price ='5';
			// $production->bread_name = 'HOPIA';
			// $production->save();
			// $production = new Production;
			// $production->price ='5';
			// $production->bread_name = 'TALIAN BREAD';
			// $production->save();
			// $production = new Production;
			// $production->price ='5';
			// $production->bread_name = 'MAIS-MAIS';
			// $production->save();
			// $production = new Production;
			// $production->price ='5';
			// $production->bread_name = 'MARBLE CAKE';
			// $production->save();
			// $production = new Production;
			// $production->price ='5';
			// $production->bread_name = 'MAYONNAISE';
			// $production->save();
			// $production = new Production;
			// $production->price ='30';
			// $production->bread_name = 'MONGO BREAD(B)';
			// $production->save();
			// $production = new Production;
			// $production->price ='5';
			// $production->bread_name = 'MONGO BREAD';
			// $production->save();
			// $production = new Production;
			// $production->price ='30';
			// $production->bread_name = 'MUNAY BREAD(b)';
			// $production->save();
			// $production = new Production;
			// $production->price ='5';
			// $production->bread_name = 'MUNAY BREAD(s)';
			// $production->save();
			// $production = new Production;
			// $production->price ='5';
			// $production->bread_name = 'MUSHROOM';
			// $production->save();
			// $production = new Production;
			// $production->price ='5';
			// $production->bread_name = 'HAND BREAD';
			// $production->save();
			// $production = new Production;
			// $production->price ='4';
			// $production->bread_name = 'PANDESAL (b)';
			// $production->save();
			// $production = new Production;
			// $production->price ='2';
			// $production->bread_name = 'PANDESAL (m)';
			// $production->save();
			// $production = new Production;
			// $production->price ='1';
			// $production->bread_name = 'PANDESAL (s)';
			// $production->save();
			// $production = new Production;
			// $production->price ='5';
			// $production->bread_name = 'PAPAYA (b)';
			// $production->save();
			// $production = new Production;
			// $production->price ='2';
			// $production->bread_name = 'PAPAYA (s)';
			// $production->save();
			// $production = new Production;
			// $production->price ='5';
			// $production->bread_name = 'PINAYPAY/FINGER BREAD';
			// $production->save();
			// $production = new Production;
			// $production->price ='5';
			// $production->bread_name = 'PINEAPPLE PIE';
			// $production->save();
			// $production = new Production;
			// $production->price ='5';
			// $production->bread_name = 'PINEAPPLE ROLL';
			// $production->save();
			// $production = new Production;
			// $production->price ='5';
			// $production->bread_name = 'RED PIE';
			// $production->save();
			// $production = new Production;
			// $production->price ='40';
			// $production->bread_name = 'SLICE/LOAF BREAD PLAIN';
			// $production->save();
			// $production = new Production;
			// $production->price ='45';
			// $production->bread_name = 'SLICE/LOAF BREAD with chz';
			// $production->save();
			// $production = new Production;
			// $production->price ='5';
			// $production->bread_name = 'SPANISH ROLL';
			// $production->save();
			// $production = new Production;
			// $production->price ='5';
			// $production->bread_name = 'STAR BREAD (b)';
			// $production->save();
			// $production = new Production;
			// $production->price ='5';
			// $production->bread_name = 'SWEETHEART';
			// $production->save();
			// $production = new Production;
			// $production->price ='5';
			// $production->bread_name = 'TIRE BREAD(b)';
			// $production->save();
			// $production = new Production;
			// $production->price ='7';
			// $production->bread_name = 'TORTA';
			// $production->save();
			// $production = new Production;
			// $production->price ='5';
			// $production->bread_name = 'UBE CHEESE';
			// $production->save();
			// $production = new Production;
			// $production->price ='5';
			// $production->bread_name = 'UBE ENGLISH';
			// $production->save();
			// $production = new Production;
			// $production->price ='5';
			// $production->bread_name = 'UBE FLOWER';
			// $production->save();
			// $production = new Production;
			// $production->price ='5';
			// $production->bread_name = 'UBE GERMAN';
			// $production->save();
			// $production = new Production;
			// $production->price ='5';
			// $production->bread_name = 'UBE PIE';
			// $production->save();
			// $production = new Production;
			// $production->price ='5';
			// $production->bread_name = 'UBE ROLL';
			// $production->save();
			// $production = new Production;
			// $production->price ='5';
			// $production->bread_name = 'UBE SQUASH';
			// $production->save();
			// $production = new Production;
			// $production->price ='5';
			// $production->bread_name = 'WHEAT BREAD';
			// $production->save();
			// $production = new Production;
			// $production->price ='5';
			// $production->bread_name = 'YOVO-PANDAN';
			// $production->save();
			// $production = new Production;
			// $production->price ='5';
			// $production->bread_name = 'YOYO-UBE';
			// $production->save();
			// $production = new Production;
			// $production->price ='30';
			// $production->bread_name = 'GRACIOSA';
			// $production->save();
			// $production = new Production;
			// $production->price ='5';
			// $production->bread_name = 'BROWNIES';
			// $production->save();
			// $production = new Production;
			// $production->price ='5';
			// $production->bread_name = 'BUTTER SCOTCH';
			// $production->save();
			// $production = new Production;
			// $production->price ='5';
			// $production->bread_name = 'PUTO CHEESE';
			// $production->save();
			// $production = new Production;
			// $production->price ='5';
			// $production->bread_name = 'PUTO UBE';
			// $production->save();
			// $production = new Production;
			// $production->price ='5';
			// $production->bread_name = 'PUTO PANDAN';
			// $production->save();
			// $production = new Production;
			// $production->price ='70';
			// $production->bread_name = 'PEANUT BUTTER';
			// $production->save();



     	    $user = new User;
	        $user->branch_name = 'admin';
	        $user->branch_assigned_person = 'admin';
	        $user->branch_position = 'admin';
	        $user->username = 'admin';
	        $user->password = Hash::make('admin');
	 		$user->status = 'active';
	 		$user->year = date('Y');
	        $user->save();

        for ($i=0; $i < 5; $i++) { 
        	$user = new User;
	        $user->branch_name = 'Branch '.$i;
	        $user->branch_assigned_person = 'person '.$i;
	        $user->branch_position = 'personnel';
	        $user->username = 'personnel'.$i;
	        $user->password = Hash::make('admin');
	 		$user->status = 'active';
	 		$user->year = date('Y');
	        $user->save();
        }

		$ing = 			
		array('Gold Star',
		'Sun Moon Star',
		'All Purpose',
		'Brown Sugar',
		'Refined Sugar',
		'Refined Salt',
		'Mongoes',
		'Cocoa',
		'Cornstarch',
		'Alaska Evap',
		'Bambie Oil',
		'Alpha Oil',
		'Baking Cap 30z' ,
		'Cheese Magnolia',
		'Maurepan Yeast',
		'Neco Egg Yellow',
		'Neco Choco Brown',
		'Neco Ube Violet' ,
		'Old News',
		'Peotraco',
		'Peneapple Crushed',
		'Springkles',
		'Ube Powder',
		'Vanilla',
		'BOS Bambie Pail',
		'Lecinta',
		'Dobrem',
		'Lunga White',
		'Glassine',
		'Cake Flour',
		'Frosty Wip Cream',
		'Baker Gel',
		'Puyo #2',
		'Puyo #4',
		'Puyo #6',
		'Puyo #8',
		'Puyo #16',
		'Lard',
		'Margarine',
		'Dairy Bake',
		'Maurepan Yeast B.O',
		'Triple a Baking Powder',
		'Baking Calumet',
		'Ultra Soft',
		'Plantza',
		'Drinking Straw',
		'1st General Poly',
		'Dairy Milk Butter Milk',
		'Doreen Condense Small',
		'Spring Lard',
		'Spring Margarine',
		'4x12 Texas',
		'8x12 Roll Bag',
		'Bumbee Tiny Plain' ,
		'Bumbee Medium Plain',
		'Bumbee Large Plain',
		'3rd Island Poly',
		'HPCO RAW',
		'VMC Refined',
		'M.C Refined',
		'Green Monggo',
		'Eco Bag Medium',
		'Eco Bag Large',
		'BOB',
		'BC Baking Powder Green',
		'BC Baking Poweder Red',
		'Ola Oil',
		'Anti Amag');

		for ($i=0; $i < 66; $i++) { 
			$ingredients = new BranchIngredients;
			$ingredients->branch_id = 1;
	        $ingredients->ingredients_name = $ing[$i];
			$ingredients->ingredients_quantity = 100;
	        $ingredients->save(); 
		}
		for ($i=0; $i < 66; $i++) { 
			$ingredients = new BranchIngredients;
			$ingredients->branch_id = 2;
	        $ingredients->ingredients_name = $ing[$i];
			$ingredients->ingredients_quantity = 100;
	        $ingredients->save(); 
		}
		for ($i=0; $i < 66; $i++) { 
			$ingredients = new BranchIngredients;
			$ingredients->branch_id = 3;
	        $ingredients->ingredients_name = $ing[$i];
			$ingredients->ingredients_quantity = 100;
	        $ingredients->save(); 
		}
		for ($i=0; $i < 66; $i++) { 
			$ingredients = new BranchIngredients;
			$ingredients->branch_id = 4;
	        $ingredients->ingredients_name = $ing[$i];
			$ingredients->ingredients_quantity = 100;
	        $ingredients->save(); 
		}
		for ($i=0; $i < 66; $i++) { 
			$ingredients = new BranchIngredients;
			$ingredients->branch_id = 5;
	        $ingredients->ingredients_name = $ing[$i];
			$ingredients->ingredients_quantity = 100;
	        $ingredients->save(); 
		}
		for ($i=0; $i < 66; $i++) { 
			$ingredients = new BranchIngredients;
			$ingredients->branch_id = 6;
	        $ingredients->ingredients_name = $ing[$i];
			$ingredients->ingredients_quantity = 100;
	        $ingredients->save(); 
		}
	 }
}
