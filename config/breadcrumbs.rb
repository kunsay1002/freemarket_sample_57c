crumb :root do
  link "トップページ", root_path
end

crumb :mypage do
  link "マイページ", mypage_index_path
end

crumb :profile do
  link "プロフィール", mypage_profile_path
  parent :mypage
end

crumb :card do
  link "クレジットカード情報", mypage_card_path
  parent :mypage
end

crumb :info do
  link "本人情報登録", mypage_card_path
  parent :mypage
end

crumb :logout do
  link "ログアウト", mercari_logout_path
  parent :mypage
end


# crumb :project do |project|
#   link project.name, project_path(project)
#   parent :projects
# end

# crumb :project_issues do |project|
#   link "Issues", project_issues_path(project)
#   parent :project, project
# end

# crumb :issue do |issue|
#   link issue.title, issue_path(issue)
#   parent :project_issues, issue.project
# end

# If you want to split your breadcrumbs configuration over multiple files, you
# can create a folder named `config/breadcrumbs` and put your configuration
# files there. All *.rb files (e.g. `frontend.rb` or `products.rb`) in that
# folder are loaded and reloaded automatically when you change them, just like
# this file (`config/breadcrumbs.rb`).