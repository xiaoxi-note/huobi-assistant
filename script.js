var baseRegionHtmlStr = `
                        <div class="dialog none" id="chromePluginSettingInfo">
                            <div class="dialog-content">
                                <span class="close" id="chromePluginSettingInfoClose">关闭</span>
                                <div class="search-region">
                                    <input type="text" placeholder="search" id="searchInput">
                                </div>
                                <div id="contentTable">
                                </div>
                            </div>
                        </div>
                        <ul class="warning-region">
                        </ul>                    
                        
                        <div class="result-detail">
                        <span id="open_left" class="control hidden-none">&larr;</span>
                        <span id="close_right" class="control" >&rarr;</span>
                        <div id="content_data">
                            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUwIDUwIiBoZWlnaHQ9IjUwcHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MCA1MCIgd2lkdGg9IjUwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxyZWN0IGZpbGw9Im5vbmUiIGhlaWdodD0iNTAiIHdpZHRoPSI1MCIvPjxwYXRoIGQ9Ik00OSwyNy45NTR2LTZsLTcuMTQxLTEuMTY3ICBjLTAuNDIzLTEuNjkxLTEuMDg3LTMuMjgxLTEuOTYyLTQuNzM3bDQuMTYyLTUuOTMybC00LjI0My00LjI0MWwtNS44NTYsNC4yMWMtMS40Ni0wLjg4NC0zLjA2LTEuNTU4LTQuNzYzLTEuOTgybC0xLjI0NS03LjEwNmgtNiAgbC0xLjE1Niw3LjA4M2MtMS43MDQsMC40MTgtMy4zMTMsMS4wODMtNC43NzcsMS45NjNMMTAuMTgsNS44NzNsLTQuMjQzLDQuMjQxbDQuMTA3LDUuODc0Yy0wLjg4OCwxLjQ3LTEuNTYzLDMuMDc3LTEuOTkyLDQuNzkyICBMMSwyMS45NTR2Nmw3LjA0NCwxLjI0OWMwLjQyNSwxLjcxMSwxLjEwMSwzLjMxOCwxLjk5Miw0Ljc5bC00LjE2Myw1LjgyM2w0LjI0MSw0LjI0NWw1Ljg4MS00LjExOSAgYzEuNDY4LDAuODgyLDMuMDczLDEuNTUyLDQuNzc3LDEuOTczbDEuMTgsNy4wODdoNmwxLjI2MS03LjEwNWMxLjY5NS0wLjQzLDMuMjk3LTEuMTA1LDQuNzUxLTEuOTlsNS45MjIsNC4xNTVsNC4yNDItNC4yNDUgIGwtNC4yMjctNS44N2MwLjg3NS0xLjQ1NiwxLjUzOS0zLjA0OCwxLjk1OC00LjczOUw0OSwyNy45NTR6IE0yNSwzM2MtNC40MTgsMC04LTMuNTgyLTgtOHMzLjU4Mi04LDgtOHM4LDMuNTgyLDgsOFMyOS40MTgsMzMsMjUsMzMgIHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==" 
                                 class="setting" id="chromePluginSetting">
                            <img id="showOnAll" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDcwIDcwIiBpZD0iTGF5ZXJfMSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNzAgNzAiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnPjxwYXRoIGQ9Ik00Ni4wMTUxMzY3LDQ0LjE5NzI2NTZsLTAuNDcxNjc5Ny0wLjAwMzkwNjNsLTIyLjk0NTMxMjUtMC4zNzY5NTMxICAgYy0wLjc1MDQ4ODMtMC4wMTI2OTUzLTEuODc5Mzk0NS0wLjAzMDI3MzQtMi43MDYwNTQ3LTAuNzQwMjM0NGMtMC42Mjk4ODI4LTAuNTQxOTkyMi0wLjk3OTAwMzktMS40MDkxNzk3LTAuOTU4NDk2MS0yLjM3OTg4MjggICBjMC4wMTYxMTMzLTAuNzc4MzIwMywwLjI1MzQxOC0xLjUwNzgxMjUsMC40NjI4OTA2LTIuMTUxMzY3MmMwLjU2MTAzNTItMS43MjE2Nzk3LDEuMjU5Mjc3My0zLjg2NTIzNDQsMi45MDMzMjAzLTUuMjcyNDYwOSAgIGMxLjMyMDgwMDgtMS4xMzE4MzU5LDMuMDEwMjUzOS0xLjU4NDk2MDksNC40ODk3NDYxLTEuOTIxODc1YzAuOTUwMTk1My0wLjIxNDg0MzgsMS45NTI2MzY3LTAuMzE1NDI5NywzLjE1NjI1LTAuMzE1NDI5NyAgIGMwLjg5MzA2NjQsMCwxLjc5NDQzMzYsMC4wNTU2NjQxLDIuNjY2NTAzOSwwLjExMDM1MTZjMC43MzQzNzUsMC4wNDQ5MjE5LDEuNDcyMTY4LDAuMDkwODIwMywyLjIxMzg2NzIsMC4xMDQ0OTIyICAgYzAuOTIzODI4MSwwLjAxNjYwMTYsMS44MTU0Mjk3LDAuMDAxOTUzMSwyLjY5MTg5NDUtMC4wMTI2OTUzYzAuNjAxMDc0Mi0wLjAxMDc0MjIsMS4xOTU4MDA4LTAuMDIwNTA3OCwxLjc5MDUyNzMtMC4wMjA1MDc4ICAgYzEuNTk3MTY4LDAsMy41MTI2OTUzLDAuMDY1NDI5Nyw1LjYxMDgzOTgsMC41NTI3MzQ0YzMuNTg5ODQzOCwwLjgzMzAwNzgsNi4yMTY3OTY5LDMuNzk4ODI4MSw2LjUzODA4NTksNy4zNzc5Mjk3ICAgYzAuMTMxODM1OSwxLjQ2ODc1LTAuMjIzNjMyOCwyLjc1MTk1MzEtMS4wMDA0ODgzLDMuNjEzMjgxM0M0OS4zMTU0Mjk3LDQ0LjAyNzM0MzgsNDcuNTcwODAwOCw0NC4xOTcyNjU2LDQ2LjAxNTEzNjcsNDQuMTk3MjY1NnogICAgTTI5Ljk0NTgwMDgsMzIuNTM1MTU2M2MtMS4wODg4NjcyLDAtMS45ODYzMjgxLDAuMDg4ODY3Mi0yLjgyNDIxODgsMC4yNzgzMjAzICAgYy0xLjMwNDE5OTIsMC4yOTY4NzUtMi43ODUxNTYzLDAuNjg5NDUzMS0zLjg0NjE5MTQsMS41OTc2NTYzYy0xLjIyNjU2MjUsMS4wNDk4MDQ3LTEuODEyOTg4MywyLjYzNTc0MjItMi40NTIxNDg0LDQuNTk4NjMyOCAgIGMtMC4xODYwMzUyLDAuNTcwMzEyNS0wLjM3ODQxOCwxLjE2MTEzMjgtMC4zODk2NDg0LDEuNzE3NzczNGMtMC4wMTEyMzA1LDAuNTEzNjcxOSwwLjE1MTg1NTUsMC45NjY3OTY5LDAuNDM2MDM1MiwxLjIxMDkzNzUgICBjMC4zODMzMDA4LDAuMzI5MTAxNiwxLjA0NjM4NjcsMC4zNjYyMTA5LDEuNzQ5MDIzNCwwLjM3NzkyOTdsMjMuMzk2NDg0NCwwLjM4MDg1OTQgICBjMS4yMjYwNzQyLDAsMi41ODAwNzgxLTAuMTExMzI4MSwzLjMyNzYzNjctMC45NDA0Mjk3YzAuNjY2OTkyMi0wLjc0MDIzNDQsMC42NzUyOTMtMS44NjgxNjQxLDAuNjIwNjA1NS0yLjQ3NDYwOTQgICBjLTAuMjYzMTgzNi0yLjkzMzU5MzgtMi40MjYyNjk1LTUuMzY1MjM0NC01LjM4MjgxMjUtNi4wNTE3NTc4Yy0xLjk1MDY4MzYtMC40NTMxMjUtMy43NTk3NjU2LTAuNTEzNjcxOS01LjI3MTk3MjctMC41MTM2NzE5ICAgYy0wLjU4NjQyNTgsMC0xLjE3MjM2MzMsMC4wMDk3NjU2LTEuNzY1MTM2NywwLjAxOTUzMTNjLTAuODk0NTMxMywwLjAxNTYyNS0xLjgwMzcxMDksMC4wMjczNDM4LTIuNzQ0NjI4OSwwLjAxMzY3MTkgICBjLTAuNzYzNjcxOS0wLjAxMzY3MTktMS41MjI5NDkyLTAuMDYwNTQ2OS0yLjI3OTI5NjktMC4xMDc0MjE5ICAgQzMxLjYzMTM0NzcsMzIuNTg3ODkwNiwzMC43OTI0ODA1LDMyLjUzNTE1NjMsMjkuOTQ1ODAwOCwzMi41MzUxNTYzeiIgZmlsbD0iIzM3MzY4NCIvPjxwYXRoIGQ9Ik0zNS4xNjI1OTc3LDY1LjM1NTQ2ODhjLTAuMjMzODg2NywwLTAuNDY0ODQzOC0wLjA4OTg0MzgtMC42NTk2NjgtMC4yNTc4MTI1ICAgYy0xLjIwODAwNzgtMS4wNDU4OTg0LTIuMDgzNDk2MS03LjI5MDAzOTEtMi4xMjk4ODI4LTkuNjQ1NTA3OEwzMi4xMzcyMDcsNDMuNTEyNjk1MyAgIGMtMC4wMDc4MTI1LTAuNDE0MDYyNSwwLjMyMTI4OTEtMC43NTU4NTk0LDAuNzM1MzUxNi0wLjc2NDY0ODRjMC4wMDQ4ODI4LDAsMC4wMDk3NjU2LDAsMC4wMTUxMzY3LDAgICBjMC40MDcyMjY2LDAsMC43NDEyMTA5LDAuMzI2MTcxOSwwLjc0OTUxMTcsMC43MzUzNTE2bDAuMjM1ODM5OCwxMS45Mzk0NTMxICAgYzAuMDUyMjQ2MSwyLjY2NjAxNTYsMC44MTk4MjQyLDYuNzIzNjMyOCwxLjM5MDEzNjcsOC4xMjIwNzAzYzAuNDMzMTA1NS0wLjczNzMwNDcsMS4wMDkyNzczLTIuNDMxNjQwNiwxLjEyNS0zLjg1MTU2MjUgICBjMC40MzM1OTM4LTUuMzMwMDc4MSwwLjQzNjUyMzQtMTAuNzM1MzUxNiwwLjAwODMwMDgtMTYuMDYzNDc2NmMtMC4wMzMyMDMxLTAuNDEzMDg1OSwwLjI3NDQxNDEtMC43NzUzOTA2LDAuNjg3NS0wLjgwODU5MzggICBjMC40MDg2OTE0LTAuMDE5NTMxMywwLjc3NDQxNDEsMC4yNzUzOTA2LDAuODA3NjE3MiwwLjY4NzVjMC40MzQ1NzAzLDUuNDEwMTU2MywwLjQzMTY0MDYsMTAuODk1NTA3OC0wLjAwODMwMDgsMTYuMzA1NjY0MSAgIGMtMC4wOTQ3MjY2LDEuMTYxMTMyOC0wLjk1MDE5NTMsNS4zMjcxNDg0LTIuNjA2OTMzNiw1LjUzNDE3OTcgICBDMzUuMjM4NzY5NSw2NS4zNTM1MTU2LDM1LjIwMDY4MzYsNjUuMzU1NDY4OCwzNS4xNjI1OTc3LDY1LjM1NTQ2ODh6IiBmaWxsPSIjMzczNjg0Ii8+PHBhdGggZD0iTTM5LjQ3MjE2OCwxMy41TDM5LjQ3MjE2OCwxMy41Yy0wLjM2ODY1MjMsMC0wLjczNzMwNDctMC4wMDc4MTI1LTEuMTAzNTE1Ni0wLjAxNTYyNSAgIGwtMTAuNDEyNTk3Ny0wLjIzNjMyODFjLTAuOTA4NjkxNC0wLjAyMDUwNzgtMi4xNTMzMjAzLTAuMDQ3ODUxNi0zLjA5OTYwOTQtMC44MjkxMDE2ICAgYy0wLjk5OTUxMTctMC44MjMyNDIyLTEuMjM5NzQ2MS0yLjEyNTk3NjYtMS4zODY3MTg4LTMuMjgxMjVjLTAuMjAzMTI1LTEuNTk4NjMyOC0wLjI0ODUzNTItMy4zOTE2MDE2LDAuOTUzNjEzMy00LjU2OTMzNTkgICBjMC45NjI4OTA2LTAuOTQxNDA2MywyLjMxNjQwNjMtMS4wNjI1LDMuMzg4MTgzNi0xLjA2MjVjMC4yMjY1NjI1LDAsMC40NTE2NjAyLDAuMDA1ODU5NCwwLjY3MjM2MzMsMC4wMTI2OTUzICAgbDEzLjcyMDcwMzEsMC40NzQ2MDk0YzAuNjQ3OTQ5MiwwLjAyMjQ2MDksMS4zODI4MTI1LDAuMDQ3ODUxNiwyLjA5Mjc3MzQsMC4zMTM0NzY2ICAgYzEuNzY3NTc4MSwwLjY2MDE1NjMsMi44NTY0NDUzLDIuODA1NjY0MSwyLjQyNzczNDQsNC43ODEyNWMtMC4zNzI1NTg2LDEuNzE3NzczNC0xLjc1MTQ2NDgsMy4yMDgwMDc4LTMuNTk5MTIxMSwzLjg4OTY0ODQgICBDNDEuODc1NDg4MywxMy40Mzg0NzY2LDQwLjU3NzE0ODQsMTMuNSwzOS40NzIxNjgsMTMuNXogTTI3LjgxMTUyMzQsNS4wMDU4NTk0ICAgYy0wLjc4NjYyMTEsMC0xLjc2MzY3MTksMC4wNzIyNjU2LTIuMzM4ODY3MiwwLjYzNDc2NTZjLTAuNzMwOTU3LDAuNzE1ODIwMy0wLjY3OTE5OTIsMi4wMTI2OTUzLTAuNTE0NjQ4NCwzLjMwNzYxNzIgICBjMC4xMTU3MjI3LDAuOTEwMTU2MywwLjI3Njg1NTUsMS44Mzg4NjcyLDAuODUzMDI3MywyLjMxMzQ3NjZjMC41MDM5MDYzLDAuNDE2MDE1NiwxLjI4NDY2OCwwLjQ2Njc5NjksMi4xNzg3MTA5LDAuNDg2MzI4MSAgIEwzOC40MDI4MzIsMTEuOTg0Mzc1QzM4Ljc1NzMyNDIsMTEuOTkyMTg3NSwzOS4xMTQ3NDYxLDEyLDM5LjQ3MjE2OCwxMmwwLDBjMC45NzI2NTYzLDAsMi4xMDU5NTctMC4wNTA3ODEzLDMuMTM1MjUzOS0wLjQzMDY2NDEgICBjMS4zNTAwOTc3LTAuNDk3MDcwMywyLjM5MDYyNS0xLjU5NjY3OTcsMi42NTE4NTU1LTIuNzk5ODA0N2MwLjI3MjQ2MDktMS4yNTQ4ODI4LTAuNDA4NjkxNC0yLjY1NTI3MzQtMS40ODczMDQ3LTMuMDU4NTkzOCAgIGMtMC40ODA0Njg4LTAuMTc5Njg3NS0xLjA1OTA4Mi0wLjE5OTIxODgtMS42MTkxNDA2LTAuMjE3NzczNEwyOC40MzI2MTcyLDUuMDE4NTU0NyAgIEMyOC4yMjkwMDM5LDUuMDEwNzQyMiwyOC4wMjA5OTYxLDUuMDA1ODU5NCwyNy44MTE1MjM0LDUuMDA1ODU5NHoiIGZpbGw9IiMzNzM2ODQiLz48cGF0aCBkPSJNMjguMTc4NzEwOSwzMi41Yy0wLjAxMTIzMDUsMC0wLjAyMjk0OTIsMC0wLjAzNDY2OC0wLjAwMDk3NjYgICBjLTAuNDEzNTc0Mi0wLjAxODU1NDctMC43MzM4ODY3LTAuMzY5MTQwNi0wLjcxNDg0MzgtMC43ODMyMDMxbDAuODYzMjgxMy0xOC45MzU1NDY5ICAgYzAuMDE4NTU0Ny0wLjQxNDA2MjUsMC4zNjI3OTMtMC43NDMxNjQxLDAuNzgzMjAzMS0wLjcxNDg0MzhjMC40MTM1NzQyLDAuMDE4NTU0NywwLjczMzg4NjcsMC4zNjkxNDA2LDAuNzE0ODQzOCwwLjc4MzIwMzEgICBsLTAuODYzMjgxMywxOC45MzU1NDY5QzI4LjkwOTE3OTcsMzIuMTg2NTIzNCwyOC41NzcxNDg0LDMyLjUsMjguMTc4NzEwOSwzMi41eiIgZmlsbD0iIzM3MzY4NCIvPjxwYXRoIGQ9Ik00MS45MDY3MzgzLDMyLjE1NjI1Yy0wLjAwNTM3MTEsMC0wLjAxMDI1MzksMC0wLjAxNTYyNSwwICAgYy0wLjQxNDA2MjUtMC4wMDg3ODkxLTAuNzQzMTY0MS0wLjM1MDU4NTktMC43MzQ4NjMzLTAuNzY0NjQ4NGMwLjEwODg4NjctNS40Mzk0NTMxLTAuMTA3OTEwMi0xMS45MzE2NDA2LTAuNjEwODM5OC0xOC4yNzgzMjAzICAgYy0wLjAzMjcxNDgtMC40MTMwODU5LDAuMjc1MzkwNi0wLjc3NDQxNDEsMC42ODg0NzY2LTAuODA3NjE3MmMwLjQxMDE1NjMtMC4wMjUzOTA2LDAuNzczNDM3NSwwLjI3NTM5MDYsMC44MDY2NDA2LDAuNjg4NDc2NiAgIGMwLjUwNjgzNTksNi4zOTU1MDc4LDAuNzI1NTg1OSwxMi45Mzk0NTMxLDAuNjE1NzIyNywxOC40MjY3NTc4QzQyLjY0Nzk0OTIsMzEuODMwMDc4MSw0Mi4zMTM5NjQ4LDMyLjE1NjI1LDQxLjkwNjczODMsMzIuMTU2MjV6IiBmaWxsPSIjMzczNjg0Ii8+PHBhdGggZD0iTTM3LjM4NTI1MzksMTcuNDY2Nzk2OWMtMC4zMjEyODkxLDAtMC42MTgxNjQxLTAuMjA4MDA3OC0wLjcxNjc5NjktMC41MzEyNSAgIGMtMC4xMjEwOTM4LTAuMzk2NDg0NCwwLjEwMjUzOTEtMC44MTU0Mjk3LDAuNDk4NTM1Mi0wLjkzNjUyMzRsMy43OTQ0MzM2LTEuMTU3MjI2NiAgIGMwLjM5NTUwNzgtMC4xMTcxODc1LDAuODE0OTQxNCwwLjEwMjUzOTEsMC45MzYwMzUyLDAuNDk5MDIzNHMtMC4xMDIwNTA4LDAuODE1NDI5Ny0wLjQ5ODUzNTIsMC45MzY1MjM0bC0zLjc5NDQzMzYsMS4xNTcyMjY2ICAgQzM3LjUzMTczODMsMTcuNDU2MDU0NywzNy40NTgwMDc4LDE3LjQ2Njc5NjksMzcuMzg1MjUzOSwxNy40NjY3OTY5eiIgZmlsbD0iIzM3MzY4NCIvPjxwYXRoIGQ9Ik0zNy4zNTIwNTA4LDIwLjI0MzE2NDFjLTAuMzE4MzU5NCwwLTAuNjEzNzY5NS0wLjIwNDEwMTYtMC43MTQ4NDM4LTAuNTIzNDM3NSAgIGMtMC4xMjUtMC4zOTQ1MzEzLDAuMDkzMjYxNy0wLjgxNjQwNjMsMC40ODgyODEzLTAuOTQxNDA2M2MxLjQwNDc4NTItMC40NDUzMTI1LDIuODYxMzI4MS0wLjczNjMyODEsNC4zMjg2MTMzLTAuODY2MjEwOSAgIGMwLjQwODIwMzEtMC4wMzIyMjY2LDAuNzc2MzY3MiwwLjI2ODU1NDcsMC44MTI5ODgzLDAuNjgwNjY0MWMwLjAzNjYyMTEsMC40MTMwODU5LTAuMjY4NTU0NywwLjc3NzM0MzgtMC42ODExNTIzLDAuODEzNDc2NiAgIGMtMS4zNTgzOTg0LDAuMTIwMTE3Mi0yLjcwNjU0MywwLjM4OTY0ODQtNC4wMDczMjQyLDAuODAxNzU3OEMzNy41MDM0MTgsMjAuMjMyNDIxOSwzNy40MjY3NTc4LDIwLjI0MzE2NDEsMzcuMzUyMDUwOCwyMC4yNDMxNjQxeiAgICIgZmlsbD0iIzM3MzY4NCIvPjxwYXRoIGQ9Ik0zNy41NDc4NTE2LDIzLjEwNDQ5MjJjLTAuMzQxMzA4NiwwLTAuNjQ5OTAyMy0wLjIzNDM3NS0wLjcyOTk4MDUtMC41ODEwNTQ3ICAgYy0wLjA5Mzc1LTAuNDAzMzIwMywwLjE1NzcxNDgtMC44MDU2NjQxLDAuNTYxMDM1Mi0wLjg5OTQxNDFsMy45MTg0NTctMC45MDgyMDMxICAgYzAuNDA4NjkxNC0wLjA5NzY1NjMsMC44MDcxMjg5LDAuMTU4MjAzMSwwLjg5OTkwMjMsMC41NjE1MjM0YzAuMDkzNzUsMC40MDMzMjAzLTAuMTU3NzE0OCwwLjgwNTY2NDEtMC41NjEwMzUyLDAuODk5NDE0MSAgIGwtMy45MTg0NTcsMC45MDgyMDMxQzM3LjY2MDY0NDUsMjMuMDk4NjMyOCwzNy42MDM1MTU2LDIzLjEwNDQ5MjIsMzcuNTQ3ODUxNiwyMy4xMDQ0OTIyeiIgZmlsbD0iIzM3MzY4NCIvPjxwYXRoIGQ9Ik0zNy4zOTI1NzgxLDI1LjgxNDQ1MzFjLTAuMzcxNTgyLDAtMC42OTM4NDc3LTAuMjc1MzkwNi0wLjc0MjY3NTgtMC42NTQyOTY5ICAgYy0wLjA1MzIyMjctMC40MTAxNTYzLDAuMjM2ODE2NC0wLjc4NjEzMjgsMC42NDc0NjA5LTAuODM5ODQzOGMxLjM4MTM0NzctMC4xNzc3MzQ0LDIuNzQ5MDIzNC0wLjUwMzkwNjMsNC4wNjQ0NTMxLTAuOTY1ODIwMyAgIGMwLjM5MzU1NDctMC4xMzg2NzE5LDAuODE5MzM1OSwwLjA2NzM4MjgsMC45NTY1NDMsMC40NTgwMDc4cy0wLjA2Nzg3MTEsMC44MTkzMzU5LTAuNDU4NDk2MSwwLjk1NjA1NDcgICBjLTEuNDE0NTUwOCwwLjQ5ODA0NjktMi44ODQ3NjU2LDAuODQ3NjU2My00LjM3MDExNzIsMS4wNDAwMzkxQzM3LjQ1NzAzMTMsMjUuODEyNSwzNy40MjQ4MDQ3LDI1LjgxNDQ1MzEsMzcuMzkyNTc4MSwyNS44MTQ0NTMxeiIgZmlsbD0iIzM3MzY4NCIvPjxwYXRoIGQ9Ik0zNy42MTYyMTA5LDI4LjkyMDg5ODRjLTAuMzQ4MTQ0NSwwLTAuNjYwNjQ0NS0wLjI0NDE0MDYtMC43MzMzOTg0LTAuNTk4NjMyOCAgIGMtMC4wODM0OTYxLTAuNDA2MjUsMC4xNzcyNDYxLTAuODAyNzM0NCwwLjU4MzAwNzgtMC44ODU3NDIybDQuMTcwODk4NC0wLjg1NzQyMTkgICBjMC40MDE4NTU1LTAuMDg3ODkwNiwwLjgwMjI0NjEsMC4xNzc3MzQ0LDAuODg1NzQyMiwwLjU4Mzk4NDRjMC4wODMwMDc4LDAuNDA1MjczNC0wLjE3ODIyMjcsMC44MDE3NTc4LTAuNTgzOTg0NCwwLjg4NDc2NTYgICBsLTQuMTY5OTIxOSwwLjg1NzQyMTlDMzcuNzE3Mjg1MiwyOC45MTYwMTU2LDM3LjY2NjUwMzksMjguOTIwODk4NCwzNy42MTYyMTA5LDI4LjkyMDg5ODR6IiBmaWxsPSIjMzczNjg0Ii8+PC9nPjwvc3ZnPg==" alt="">
                            <span class="setting none" id="chromePluginClear">清理</span>
                            <div id="priceDetail">
                              <div>🐷 btc:$<span id="usdBtcPrice"></span>
                                      ¥<span id="cnyBtcPrice"></span>
                                  🚀 bch:$<span id="usdBchPrice"></span>
                                      ¥<span id="cnyBchPrice"></span>
                                   🐒 eth:$<span id="usdEthPrice"></span>
                                      ¥<span id="cnyEthPrice"></span>
                              </div>
                            </div>
                            <div id="watchDataDetail">
                                <table id="resultData">
                                </table>
                            </div>
                            
                        </div>`;
function dateFtt(fmt, date) { //author: meizz
  var o = {
    "M+": date.getMonth() + 1,                 //月份
    "d+": date.getDate(),                    //日
    "h+": date.getHours(),                   //小时
    "m+": date.getMinutes(),                 //分
    "s+": date.getSeconds(),                 //秒
    "q+": Math.floor((date.getMonth() + 3) / 3), //季度
    "S": date.getMilliseconds()             //毫秒
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}
var bodyObj = document.querySelector('body')
var init = function () {
  var divObj = document.createElement('div')
  divObj.innerHTML = baseRegionHtmlStr;
  divObj.id = 'chromePluginHuoBiAssistant';
  bodyObj.appendChild(divObj);
}

var hidden = function () {
  document.querySelector('.result-detail').classList.add('hidden')
  document.querySelector('#open_left').classList.remove('hidden-none')
  document.querySelector('#close_right').classList.add('hidden-none')
}
var show = function () {
  document.querySelector('.result-detail').classList.remove('hidden')
  document.querySelector('#open_left').classList.add('hidden-none')
  document.querySelector('#close_right').classList.remove('hidden-none')
}
var usdtCoinArray = [{"icon": "btc", "base": "usdt"}, {"icon": "bch", "base": "usdt"}, {
  "icon": "eth",
  "base": "usdt"
}, {"icon": "etc", "base": "usdt"}, {"icon": "ltc", "base": "usdt"}, {"icon": "eos", "base": "usdt"}, {
  "icon": "xrp",
  "base": "usdt"
}, {"icon": "omg", "base": "usdt"}, {"icon": "dash", "base": "usdt"}, {"icon": "zec", "base": "usdt"}, {
  "icon": "ada",
  "base": "usdt"
}, {"icon": "btm", "base": "usdt"}, {"icon": "bts", "base": "usdt"}, {"icon": "ont", "base": "usdt"}, {
  "icon": "iost",
  "base": "usdt"
}, {"icon": "ht", "base": "usdt"}, {"icon": "trx", "base": "usdt"}, {"icon": "dta", "base": "usdt"}, {
  "icon": "neo",
  "base": "usdt"
}, {"icon": "qtum", "base": "usdt"}, {"icon": "ela", "base": "usdt"}, {"icon": "ven", "base": "usdt"}, {
  "icon": "theta",
  "base": "usdt"
}, {"icon": "snt", "base": "usdt"}, {"icon": "zil", "base": "usdt"}, {"icon": "xem", "base": "usdt"}, {
  "icon": "smt",
  "base": "usdt"
}, {"icon": "nas", "base": "usdt"}, {"icon": "ruff", "base": "usdt"}, {"icon": "hsr", "base": "usdt"}, {
  "icon": "let",
  "base": "usdt"
}, {"icon": "mds", "base": "usdt"}, {"icon": "storj", "base": "usdt"}, {"icon": "elf", "base": "usdt"}, {
  "icon": "itc",
  "base": "usdt"
}, {"icon": "cvc", "base": "usdt"}, {
  "icon": "gnt",
  "base": "usdt"
}, {"base": "usdt"}, {"base": "usdt"}, {"base": "usdt"}, {"base": "usdt"}, {"base": "usdt"}, {"base": "usdt"}]

var btcCoinArray = [{"icon": "bch", "base": "btc"}, {"icon": "eth", "base": "btc"}, {
  "icon": "ltc",
  "base": "btc"
}, {"icon": "etc", "base": "btc"}, {"icon": "eos", "base": "btc"}, {"icon": "omg", "base": "btc"}, {
  "icon": "xrp",
  "base": "btc"
}, {"icon": "dash", "base": "btc"}, {"icon": "zec", "base": "btc"}, {"icon": "ada", "base": "btc"}, {
  "icon": "btm",
  "base": "btc"
}, {"icon": "ont", "base": "btc"}, {"icon": "iost", "base": "btc"}, {"icon": "ht", "base": "btc"}, {
  "icon": "trx",
  "base": "btc"
}, {"icon": "ela", "base": "btc"}, {"icon": "wicc", "base": "btc"}, {"icon": "ocn", "base": "btc"}, {
  "icon": "zla",
  "base": "btc"
}, {"icon": "abt", "base": "btc"}, {"icon": "mtx", "base": "btc"}, {"icon": "nas", "base": "btc"}, {
  "icon": "ven",
  "base": "btc"
}, {"icon": "dta", "base": "btc"}, {"icon": "neo", "base": "btc"}, {"icon": "wax", "base": "btc"}, {
  "icon": "bts",
  "base": "btc"
}, {"icon": "zil", "base": "btc"}, {"icon": "theta", "base": "btc"}, {"icon": "ctxc", "base": "btc"}, {
  "icon": "srn",
  "base": "btc"
}, {"icon": "xem", "base": "btc"}, {"icon": "edu", "base": "btc"}, {"icon": "icx", "base": "btc"}, {
  "icon": "dgd",
  "base": "btc"
}, {"icon": "chat", "base": "btc"}, {"icon": "wpr", "base": "btc"}, {"icon": "smt", "base": "btc"}, {
  "icon": "lun",
  "base": "btc"
}, {"icon": "swftc", "base": "btc"}, {"icon": "snt", "base": "btc"}, {"icon": "meet", "base": "btc"}, {
  "icon": "yee",
  "base": "btc"
}, {"icon": "elf", "base": "btc"}, {"icon": "let", "base": "btc"}, {"icon": "qtum", "base": "btc"}, {
  "icon": "lsk",
  "base": "btc"
}, {"icon": "itc", "base": "btc"}, {"icon": "soc", "base": "btc"}, {"icon": "qash", "base": "btc"}, {
  "icon": "mds",
  "base": "btc"
}, {"icon": "eko", "base": "btc"}, {"icon": "topc", "base": "btc"}, {"icon": "mtn", "base": "btc"}, {
  "icon": "act",
  "base": "btc"
}, {"icon": "hsr", "base": "btc"}, {"icon": "stk", "base": "btc"}, {"icon": "storj", "base": "btc"}, {
  "icon": "gnx",
  "base": "btc"
}, {"icon": "dbc", "base": "btc"}, {"icon": "snc", "base": "btc"}, {"icon": "cmt", "base": "btc"}, {
  "icon": "tnb",
  "base": "btc"
}, {"icon": "ruff", "base": "btc"}, {"icon": "qun", "base": "btc"}, {"icon": "zrx", "base": "btc"}, {
  "icon": "knc",
  "base": "btc"
}, {"icon": "blz", "base": "btc"}, {"icon": "propy", "base": "btc"}, {"icon": "rpx", "base": "btc"}, {
  "icon": "appc",
  "base": "btc"
}, {"icon": "aidoc", "base": "btc"}, {"icon": "powr", "base": "btc"}, {"icon": "cvc", "base": "btc"}, {
  "icon": "pay",
  "base": "btc"
}, {"icon": "qsp", "base": "btc"}, {"icon": "dat", "base": "btc"}, {"icon": "rdn", "base": "btc"}, {
  "icon": "mco",
  "base": "btc"
}, {"icon": "rcn", "base": "btc"}, {"icon": "mana", "base": "btc"}, {"icon": "utk", "base": "btc"}, {
  "icon": "tnt",
  "base": "btc"
}, {"icon": "gas", "base": "btc"}, {"icon": "bat", "base": "btc"}, {"icon": "ost", "base": "btc"}, {
  "icon": "link",
  "base": "btc"
}, {"icon": "gnt", "base": "btc"}, {"icon": "mtl", "base": "btc"}, {"icon": "evx", "base": "btc"}, {
  "icon": "req",
  "base": "btc"
}, {"icon": "adx", "base": "btc"}, {"icon": "ast", "base": "btc"}, {"icon": "eng", "base": "btc"}, {
  "icon": "salt",
  "base": "btc"
}, {"icon": "bifi", "base": "btc"}, {"icon": "bcx", "base": "btc"}, {"icon": "bcd", "base": "btc"}, {
  "icon": "sbtc",
  "base": "btc"
}, {
  "icon": "btg",
  "base": "btc"
}, {"base": "btc"}, {"base": "btc"}, {"base": "btc"}, {"base": "btc"}, {"base": "btc"}, {"base": "btc"}]

var ethCoinArray = [{"icon": "bch", "base": "eth"}, {"icon": "eth", "base": "eth"}, {
  "icon": "ltc",
  "base": "eth"
}, {"icon": "etc", "base": "eth"}, {"icon": "eos", "base": "eth"}, {"icon": "omg", "base": "eth"}, {
  "icon": "xrp",
  "base": "eth"
}, {"icon": "dash", "base": "eth"}, {"icon": "zec", "base": "eth"}, {"icon": "ada", "base": "eth"}, {
  "icon": "btm",
  "base": "eth"
}, {"icon": "ont", "base": "eth"}, {"icon": "iost", "base": "eth"}, {"icon": "ht", "base": "eth"}, {
  "icon": "trx",
  "base": "eth"
}, {"icon": "ela", "base": "eth"}, {"icon": "wicc", "base": "eth"}, {"icon": "ocn", "base": "eth"}, {
  "icon": "zla",
  "base": "eth"
}, {"icon": "abt", "base": "eth"}, {"icon": "mtx", "base": "eth"}, {"icon": "nas", "base": "eth"}, {
  "icon": "ven",
  "base": "eth"
}, {"icon": "dta", "base": "eth"}, {"icon": "neo", "base": "eth"}, {"icon": "wax", "base": "eth"}, {
  "icon": "bts",
  "base": "eth"
}, {"icon": "zil", "base": "eth"}, {"icon": "theta", "base": "eth"}, {"icon": "ctxc", "base": "eth"}, {
  "icon": "srn",
  "base": "eth"
}, {"icon": "xem", "base": "eth"}, {"icon": "edu", "base": "eth"}, {"icon": "icx", "base": "eth"}, {
  "icon": "dgd",
  "base": "eth"
}, {"icon": "chat", "base": "eth"}, {"icon": "wpr", "base": "eth"}, {"icon": "smt", "base": "eth"}, {
  "icon": "lun",
  "base": "eth"
}, {"icon": "swftc", "base": "eth"}, {"icon": "snt", "base": "eth"}, {"icon": "meet", "base": "eth"}, {
  "icon": "yee",
  "base": "eth"
}, {"icon": "elf", "base": "eth"}, {"icon": "let", "base": "eth"}, {"icon": "qtum", "base": "eth"}, {
  "icon": "lsk",
  "base": "eth"
}, {"icon": "itc", "base": "eth"}, {"icon": "soc", "base": "eth"}, {"icon": "qash", "base": "eth"}, {
  "icon": "mds",
  "base": "eth"
}, {"icon": "eko", "base": "eth"}, {"icon": "topc", "base": "eth"}, {"icon": "mtn", "base": "eth"}, {
  "icon": "act",
  "base": "eth"
}, {"icon": "hsr", "base": "eth"}, {"icon": "stk", "base": "eth"}, {"icon": "storj", "base": "eth"}, {
  "icon": "gnx",
  "base": "eth"
}, {"icon": "dbc", "base": "eth"}, {"icon": "snc", "base": "eth"}, {"icon": "cmt", "base": "eth"}, {
  "icon": "tnb",
  "base": "eth"
}, {"icon": "ruff", "base": "eth"}, {"icon": "qun", "base": "eth"}, {"icon": "zrx", "base": "eth"}, {
  "icon": "knc",
  "base": "eth"
}, {"icon": "blz", "base": "eth"}, {"icon": "propy", "base": "eth"}, {"icon": "rpx", "base": "eth"}, {
  "icon": "appc",
  "base": "eth"
}, {"icon": "aidoc", "base": "eth"}, {"icon": "powr", "base": "eth"}, {"icon": "cvc", "base": "eth"}, {
  "icon": "pay",
  "base": "eth"
}, {"icon": "qsp", "base": "eth"}, {"icon": "dat", "base": "eth"}, {"icon": "rdn", "base": "eth"}, {
  "icon": "mco",
  "base": "eth"
}, {"icon": "rcn", "base": "eth"}, {"icon": "mana", "base": "eth"}, {"icon": "utk", "base": "eth"}, {
  "icon": "tnt",
  "base": "eth"
}, {"icon": "gas", "base": "eth"}, {"icon": "bat", "base": "eth"}, {"icon": "ost", "base": "eth"}, {
  "icon": "link",
  "base": "eth"
}, {"icon": "gnt", "base": "eth"}, {"icon": "mtl", "base": "eth"}, {"icon": "evx", "base": "eth"}, {
  "icon": "req",
  "base": "eth"
}, {"icon": "adx", "base": "eth"}, {"icon": "ast", "base": "eth"}, {"icon": "eng", "base": "eth"}, {
  "icon": "salt",
  "base": "eth"
}, {"icon": "bifi", "base": "eth"}, {"icon": "bcx", "base": "eth"}, {"icon": "bcd", "base": "eth"}, {
  "icon": "sbtc",
  "base": "eth"
}, {
  "icon": "btg",
  "base": "eth"
}, {"base": "eth"}, {"base": "eth"}, {"base": "eth"}, {"base": "eth"}, {"base": "eth"}, {"base": "eth"}]


//  var ethCoinArray = ["mee", "eos", "omg", "eko", "link", "iost", "elf", "dta", "adx", "evx", "utk", "let", "theta", "appc", "yee", "chat", "dat", "dbc", "ost", "qun", "aidoc", "topc", "act", "swftc", "powr", "req", "qtum", "wicc", "propy", "gnx", "mds", "hsr", "smt", "ven", "wax", "itc", "icx", "cvc", "rcn", "nas", "salt", "cmt", "gas", "bat", "rdn", "qsp", "btm", "mco", "tnt", "tnb", "mana", "pay", "qash", "gnt", "dgd"];
//  var btcCoinArray = ["bch", "xrp", "eth", "ltc", "dash", "eos", "etc", "omg", "zec", "eko", "link", "qtum", "elf", "ven", "adx", "evx", "utk", "dta", "let", "theta", "xem", "appc", "iost", "yee", "chat", "dat", "ost", "qun", "aidoc", "topc", "act", "dbc", "rpx", "swftc", "powr", "req", "hsr", "smt", "wax", "itc", "icx", "cvc", "rcn", "snt", "nas", "salt", "cmt", "gas", "knc", "storj", "neo", "bat", "qsp", "rdn", "btm", "mco", "tnt", "tnb", "mana", "pay", "zrx", "mtl", "qash", "gnt", "ast", "dgd", "wicc", "gnx", "mds", "propy", "sbtc", "btg", "bcd", "bifi", "bcx"];
//  var usdtCoinArray = ["btc", "bch", "xrp", "eth", "ltc", "dash", "eos", "etc", "omg", "zec", "iost", "ven", "qtum", "neo", "hsr", "cvc", "storj", "gnt", "snt"];

var util = {
  isOpen: false,
  params: {},
  ws: null,
  dicObj: {},
  unZip: function (b64Data) {
    b64Data = b64Data.split(',')[1];
    var strData = atob(b64Data);
    // Convert binary string to character-number array
    var charData = strData.split('').map(function (x) {
      return x.charCodeAt(0);
    });
    // Turn number array into byte-array
    var binData = new Uint8Array(charData);
    // // unzip
    var data = pako.inflate(binData);
    // Convert gunzipped byteArray back to ascii string:
    strData = String.fromCharCode.apply(null, new Uint16Array(data));
    return strData;
  },
  zip: function (str) {
    var binaryString = pako.gzip(str, {to: 'string'});
    return btoa(binaryString);
  },
  toBase64: function (blobData, cb) {
    var a = new FileReader();
    a.onload = function (e) {
      cb(e.target.result);
    }
    a.readAsDataURL(blobData);
  },
  ajax: {
    get: function (urlStr, success) {
      if (urlStr.indexOf('?') == -1) {
        urlStr += '?time=' + Date.now();
      } else {
        urlStr += '&time=' + Date.now();
      }
      var xhr = new XMLHttpRequest();
      xhr.open("GET", urlStr, true);
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          success && (success(xhr.responseText))
        }
      }
      xhr.send();
    }
  },
  storage: {
    set: function (keyStr, value, cb) {
      cb || (cb = function (a) {
        // console.log(a)
      });
      // typeof  value === 'object' && (value = JSON.stringify(value))
      // console.log('save storage', value)
      var data = {};
      data[keyStr] = value
      chrome.storage.sync.set(data, cb);
    },
    get: function (keyStr, cb) {
      chrome.storage.sync.get(keyStr, function (value) {
        cb(value[keyStr])
      });
    },
    clearn: function (keyStr, cb) {
      chrome.storage.sync.clear(function () {
        // console.log('clear')
        chrome.storage.sync.get('valueData', function (value) {
          // console.log('clear load data', value)
        });
      });
    }
  },
  sendWebsockt: function (value, deleteIcon) {

    this.isOpen && this.ws && (util.isOpen = false , this.ws.close())
    if ((!value || JSON.stringify(value) == '{}') && !deleteIcon) {
      return;
    }
    util.params = util.params || {}
    for (let key in value) {
      util.params[key] = value[key]
    }
    let params = util.params;
    util.storage.set('valueData', params)
    if (deleteIcon) {
      var deleteTr = document.querySelector(`.tr-${deleteIcon}`)
      deleteTr && deleteTr.remove();
    }
    var wsUri = "wss://api.huobi.pro/ws";
    // var wsUri = "wss://api.huobipro.com/ws";
    this.ws = new WebSocket(wsUri);
    var getMainCoinData = function (keyStr, typeStr) {
      var str = JSON.stringify({
        "sub": `market.btcusdt.kline.1min`,
        "id": 'btc_usdt'
      })
      util.dicObj[`market.btcusdt.kline.1min`] = {
        coin: 'btc_usdt',
        type: 'usdt'
      }
      util.params['btc_usdt'] = {name: 'btc', base: 'usdt'}
      util.ws.send(str)
      var str = JSON.stringify({
        "sub": `market.ethusdt.kline.1min`,
        "id": 'btc_usdt'
      })
      util.dicObj[`market.ethusdt.kline.1min`] = {
        coin: 'eth_usdt',
        type: 'usdt'
      }
      util.params['eth_usdt'] = {name: 'eth', base: 'usdt'}
      util.ws.send(str)
      var str = JSON.stringify({
        "sub": `market.bchusdt.kline.1min`,
        "id": 'btc_usdt'
      })
      util.dicObj[`market.bchusdt.kline.1min`] = {
        coin: 'bch_usdt',
        type: 'usdt'
      }
      util.params['bch_usdt'] = {name: 'bch', base: 'usdt'}
      util.ws.send(str)
    }
    this.ws.onopen = function (d, a) {

      util.isOpen = true;
      getMainCoinData();
      for (let keyStr in params) {

        let item = params[keyStr]
        var typeStr = item.base

        var str = JSON.stringify({
          "sub": `market.${item.name + typeStr}.kline.1min`,
          "id": item.name
        })
        util.dicObj[`market.${item.name + typeStr}.kline.1min`] = {
          coin: keyStr,
          type: typeStr
        }
        util.ws.send(str)
      }
    }
    this.ws.onerror = function () {

    }

    this.ws.onmessage = function (evt) {

      var received_msg = evt.data;
      util.toBase64(received_msg, function (data) {
        var ungzipDataStr = util.unZip(data);
        var wsData = JSON.parse(ungzipDataStr)

        if (wsData.ping) {
          util.isOpen && util.ws.send(JSON.stringify({pong: wsData.ping}))
        } else {
          if (wsData.tick) {
            // console.log('load data', JSON.stringify(wsData))
            util.render.result(wsData)
          } else {
            // console.log(evt)
          }
        }
      }.bind(this))
    };

    this.ws.onclose = function () {
      console.log('websockt close')
      this.isOpen = false
    }
  },
  render: {
    showSetting: function (keyStr) {
      var allArray = ethCoinArray.concat(btcCoinArray)
      allArray = allArray.concat(usdtCoinArray)
      allArray = allArray.filter(function (item) {
        if (!keyStr) return true;
        return item.icon.indexOf(keyStr) != -1;
      })
      var htmlStr = [`
        <table id="setSearchData">
            <thead>
            <th></th>
            <th>name/base</th>
            <th>low</th>
            <th>high</th>
        </thead>`];
      htmlStr.push('<tbody>')
      allArray.forEach(function (item) {
        htmlStr.push(this.setItem(item))
      }.bind(this))
      htmlStr.push('</table>')
      var tableRegionObj = document.querySelector('#contentTable');
      tableRegionObj.innerHTML = htmlStr.join('')
      !this.isBindEvent && (this.bindSettingEvent());
    },
    setItem (itemData) {
      var coinName = itemData.icon,
        base = itemData.base

      var _htmlStr = [];
      var isChecked = util.params && util.params[coinName + '_' + base];
      var baseData = {low: '', high: ''}
      if (util.params && util.params[coinName + '_' + base]) {
        baseData = util.params[coinName + '_' + base]
      }
      _htmlStr.push(`<tr>
        <td>
         <input type="checkbox"
                id="plugin_cb_${coinName}"
                valueData="${coinName}"
                valueBase="${base}"
                ${ isChecked ? 'checked' : ''}
                class="chrome-plugin-checkbox">
        </td>
        <td>
            ${base}/${coinName}
        </td>
        <td>
            <input type="text" id="low_${coinName}" class="chrome-plugin-input-value" value="${baseData.low}">
        </td>
        <td>
            <input type="text" id="high_${coinName}" class="chrome-plugin-input-value"  value="${baseData.high}">
        </td>
    <tr>`);
      return _htmlStr.join('')
    },
    isBindEvent: false,
    bindSettingEvent(){
      this.isBindEvent = true;
      var bodyObj = document.querySelector('body')
      var searchInput = document.querySelector('#searchInput');
      var chromePluginSettingInfo = document.querySelector('#chromePluginSettingInfo');

      var self = this;

      bodyObj.addEventListener('keyup', function (e) {
        if (e.target.id == 'searchInput') {
          self.showSetting(searchInput.value);
        }
        else if (e.target.getAttribute('class').indexOf('chrome-plugin-input-value') > -1) {
          var selectedArray = util.getSelectCoin();
          util.sendWebsockt(selectedArray);
        }
      }.bind(this), !1)

      bodyObj.addEventListener('click', function (e) {
        if (e.target.type == 'checkbox' && e.target.getAttribute('class') == 'chrome-plugin-checkbox') {
          if (e.target.checked) {
            var selectedArray = util.getSelectCoin();
            util.sendWebsockt(selectedArray);
          } else {
            var icon = e.target.getAttribute('valueData')
            var base = e.target.getAttribute('valueBase')
            delete util.params[`${icon}_${base}`]
            util.sendWebsockt(null, `${icon}_${base}`)
          }
        }
        else if (e.target.id === 'chromePluginSetting') {
          chromePluginSettingInfo.classList.remove('none')
        }
        else if (e.target.id === 'chromePluginSettingInfoClose') {
          chromePluginSettingInfo.classList.add('none')
        } else if (e.target.id === 'chromePluginClear') {
          util.storage.clearn('value');
        } else if (e.target.id === 'showOnAll') {
          var resultObj = document.querySelector('.result-detail')
          var classStr = resultObj.getAttribute('class')
          if (classStr.indexOf('result-detail-show') > -1) {
            resultObj.classList.remove('result-detail-show')
          } else {
            resultObj.classList.add('result-detail-show')
          }
        } else if (e.target.id == 'open_left') {
          show()
          util.storage.set("hidden", '0', function () {
          })
        } else if (e.target.id == 'close_right') {
          hidden()
          util.storage.set("hidden", '1', function () {
          })
        }

      }, !1)
    },
    result (data){
      var mainCoinData = ['btc_usdt', 'eth_usdt', 'bch_usdt']
      var unitData = util.dicObj[data.ch]
      var baseData = util.params[unitData.coin]
      if (!baseData) return;
      // console.log('unitData.coin', unitData.coin)
      // console.log('mainCoinData.indexOf(unitData.coin)', mainCoinData.indexOf(unitData.coin))
      if (mainCoinData.indexOf(unitData.coin) > -1) {
        util.price[unitData.coin] = (data.tick.high + data.tick.low) / 2
        util.render.showPriceAll();
        return;
      }
      var highPrice;
      var lowPrice;
      switch (baseData.base) {
        case 'btc':
          highPrice = data.tick.high * util.price.btc_cny;
          lowPrice = data.tick.low * util.price.btc_cny;
          break;
        case 'eth':
          highPrice = data.tick.high * util.price.eth_cny;
          lowPrice = data.tick.low * util.price.eth_cny;
          break;
        case 'usdt':
          highPrice = data.tick.high * util.price.cny;
          lowPrice = data.tick.low * util.price.cny;
          break;
      }
      highPrice = highPrice.toFixed(2)
      lowPrice = lowPrice.toFixed(2)
      var showMsgData = {
        up: baseData.high < highPrice,
        down: baseData.low > lowPrice,
        icon: baseData.name,
        id: unitData.coin
      };
      (!baseData.high || baseData.high == '0') && (showMsgData.up = false);
      (!baseData.low || baseData.low == '0') && (showMsgData.down = false);
      util.render.warning(showMsgData)
      var htmlStr = `
                    <td>${unitData.coin.replace('_', '/')}</td>
                    <td title="${data.tick.high}">¥${highPrice}↑</td>
                    <td>${baseData.high}</td>
                    <td title="${data.tick.low}">¥${lowPrice}↓</td>
                    <td>${baseData.low}</td>
                    <td>${dateFtt('hh:mm:ss', new Date())}</td>`;

      var tableObj = document.querySelector('#resultData');
      var trObj = tableObj.querySelector(`.tr-${unitData.coin}`)
      if (trObj) {
        trObj.innerHTML = htmlStr;
      } else {
        var _obj = document.createElement('tr');
        _obj.setAttribute('class', `tr-${unitData.coin}`);
        _obj.innerHTML = htmlStr;
        tableObj.appendChild(_obj)
      }
    },
    showPriceAll(){
      var usdBtcPrice = document.querySelector('#usdBtcPrice')
      var cnyBtcPrice = document.querySelector('#cnyBtcPrice')
      var usdEthPrice = document.querySelector('#usdEthPrice')
      var cnyEthPrice = document.querySelector('#cnyEthPrice')
      var usdBchPrice = document.querySelector('#usdBchPrice')
      var cnyBchPrice = document.querySelector('#cnyBchPrice')
      if (util.price.btc_usdt) {

        usdBtcPrice.innerHTML = util.price.btc_usdt.toFixed(2) || '';
        if (util.price.cny) {
          cnyBtcPrice.innerHTML = (util.price.btc_usdt * util.price.cny).toFixed(2);
          util.price.btc_cny = util.price.btc_usdt * util.price.cny;
        }
      }
      if (util.price.eth_usdt) {
        usdEthPrice.innerHTML = util.price.eth_usdt.toFixed(2) || '';
        if (util.price.cny) {
          cnyEthPrice.innerHTML = (util.price.eth_usdt * util.price.cny).toFixed(2);
          util.price.eth_cny = util.price.eth_usdt * util.price.cny;
        }
      }
      if (util.price.bch_usdt) {
        usdBchPrice.innerHTML = util.price.bch_usdt.toFixed(2) || '';
        if (util.price.cny) {
          cnyBchPrice.innerHTML = (util.price.bch_usdt * util.price.cny).toFixed(2);
          util.price.bch_cny = util.price.bch_usdt * util.price.cny;
        }
      }
    },
    warning: function (infoData) {
      var extendLiObj = document.querySelector(`.warning-${infoData.id}`);
      extendLiObj && extendLiObj.remove();
      var liObj = document.createElement('li')
      liObj.innerHTML = infoData.icon
      var _ulObj = document.querySelector('.warning-region')
      if (infoData.up) {
        liObj.setAttribute('class', `warning up warning-${infoData.id}`)
      } else if (infoData.down) {
        liObj.setAttribute('class', `warning down warning-${infoData.id}`)
      }
      if (infoData.up || infoData.down) {
        try {
          _ulObj.appendChild(liObj)
        } catch (e) {


        }
      }
    },
    hideWarning(){
      var warningObj = document.querySelector('.warning')
      warningObj.classList.add('none');
    }
  },
  priceData: {},
  // getAllPrice(){
  //   util.ajax.get('https://api.coinmarketcap.com/v1/ticker/', function (data) {
  //     data = JSON.parse(data)
  //     data.forEach(item => {
  //       util.priceData[item.symbol.toLocaleLowerCase()] = item.price_usd;
  //     })
  //     util.render.showPriceAll();
  //     setTimeout(util.getAllPrice, 5000)
  //   })
  // },
  getUSDTPrice(cb){
    var cnyPrice = 'cnyPrice'
    var cnyPriceDate = 'cnyPriceDate'
    util.ajax.get('https://sapi.k780.com/?app=finance.rate_cnyquot&curno=USD&&appkey=31464&sign=d1279e692156054ac00d7743664a176f&format=json', function (data) {
      try {
        data = JSON.parse(data)
        util.price.cny = data.result.USD.ABC.cn_buy / 100
        util.storage.set(cnyPrice, util.price.cny)
        util.storage.set(cnyPriceDate, Date.now())
        cb(util.price.cny)
      } catch (e) {

      }
    })
  },
  getUSDtoCny(){
    var cnyPrice = 'cnyPrice'
    var cnyPriceDate = 'cnyPriceDate'
    var cb = function (cnyNum) {
      util.price.cny = cnyNum;
      util.render.showPriceAll()
    }
    this.storage.get(cnyPrice, (priceValue) => {
      this.storage.get(cnyPriceDate, (priceDate) => {
        if (!priceValue || dateFtt('yyyy-MM-dd', new Date(priceDate)) != dateFtt('yyyy-MM-dd', new Date())) {
          util.getUSDTPrice(cb);
        } else {
          cb(priceValue);
        }
      })
    })

  },
  getSelectCoin() {
    var checkArray = document.querySelectorAll('input[type=checkbox]:checked')
    var selectObj = {};
    checkArray.forEach(item => {
      var iconName = item.getAttribute('valueData')
      var valueBase = item.getAttribute('valueBase')
      var resultData = {};
      resultData['name'] = iconName;
      resultData['base'] = valueBase;
      resultData['low'] = document.querySelector('#low_' + iconName).value || 0
      resultData['high'] = document.querySelector('#high_' + iconName).value || 0
      selectObj[`${iconName}_${valueBase}`] = resultData;
    })
    return selectObj;
  },
  start(){
    this.storage.get('valueData', (value) => {
      this.sendWebsockt(value)
      this.render.showSetting()
    })
    this.getUSDtoCny();
    util.storage.get("hidden", function (value) {
      if (value == '1') {
        hidden()
      }
    })
  },
  price: {
    cny: 0,
    btc_usdt: 0,
    btc_cny: 0,
    eth_usdt: 0,
    eth_cny: 0,
  }
}
init();
util.start()


