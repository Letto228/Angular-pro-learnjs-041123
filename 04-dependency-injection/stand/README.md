        NullInjector

            |
            V

    PlatformInjector (DataService)

            |
            V

    RootInjector(AppModuleInjector)

            |
            V

------------------------------------------------------

    |
    V

HomeModuleInjector

-------------------------------------------------------

                        AppComponentElementInjector

                                    |
                                    V
                        
                        HostComponentElementInjector

                        |                                   |
                        V                                   V

            HomeComponentElementInjector            AdminComponentElementInjector

        |                           |
        V                           V
                            
CarouselElementInjector       TopBarElementInjector
