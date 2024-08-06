<?php
namespace oop\one {
    class Manager {
        public function __construct() {
            echo "Manager from oop\\one namespace\n";
        }
    }
}

namespace oop\two {
    class Manager {
        public function __construct() {
            echo "Manager from oop\\two namespace\n";
        }
    }
}



$manager1 = new oop\one\Manager(); // Perhatikan backslash di awal
$manager2 = new oop\two\Manager(); // Perhatikan backslash di awal
?>
